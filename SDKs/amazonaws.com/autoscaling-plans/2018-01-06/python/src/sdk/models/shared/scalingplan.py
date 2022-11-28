from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScalingPlan:
    r"""ScalingPlan
    Represents a scaling plan.
    """
    
    application_source: ApplicationSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSource') }})
    scaling_instructions: List[ScalingInstruction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingInstructions') }})
    scaling_plan_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    scaling_plan_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanVersion') }})
    status_code: ScalingPlanStatusCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCode') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    status_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
