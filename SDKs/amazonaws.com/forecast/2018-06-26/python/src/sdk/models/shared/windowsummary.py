from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import evaluationtype_enum
from . import metrics


@dataclass_json
@dataclass
class WindowSummary:
    evaluation_type: Optional[evaluationtype_enum.EvaluationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationType' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    metrics: Optional[metrics.Metrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metrics' }})
    test_window_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestWindowEnd', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test_window_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestWindowStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
