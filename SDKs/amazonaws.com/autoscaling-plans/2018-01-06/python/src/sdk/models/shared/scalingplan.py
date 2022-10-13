from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import applicationsource
from . import scalinginstruction
from . import scalingplanstatuscode_enum


@dataclass_json
@dataclass
class ScalingPlan:
    application_source: applicationsource.ApplicationSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSource' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scaling_instructions: List[scalinginstruction.ScalingInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingInstructions' }})
    scaling_plan_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanName' }})
    scaling_plan_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanVersion' }})
    status_code: scalingplanstatuscode_enum.ScalingPlanStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    status_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
