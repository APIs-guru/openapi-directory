from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WindowSummary:
    r"""WindowSummary
    <p>The metrics for a time range within the evaluation portion of a dataset. This object is part of the <a>EvaluationResult</a> object.</p> <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
    """
    
    evaluation_type: Optional[EvaluationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationType') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    metrics: Optional[Metrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metrics') }})
    test_window_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestWindowEnd'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    test_window_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestWindowStart'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
