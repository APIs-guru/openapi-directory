from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import assessmentrunstate_enum


@dataclass_json
@dataclass
class AssessmentRunStateChange:
    state: assessmentrunstate_enum.AssessmentRunStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_changed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
