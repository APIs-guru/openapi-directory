from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import quality_enum
from . import aggregates


@dataclass_json
@dataclass
class AggregatedValue:
    quality: Optional[quality_enum.QualityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: aggregates.Aggregates = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
