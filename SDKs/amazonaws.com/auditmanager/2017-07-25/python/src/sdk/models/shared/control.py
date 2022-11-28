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
class Control:
    r"""Control
     A control in Audit Manager. 
    """
    
    action_plan_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionPlanInstructions') }})
    action_plan_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionPlanTitle') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    control_mapping_sources: Optional[List[ControlMappingSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlMappingSources') }})
    control_sources: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSources') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedBy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    testing_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingInformation') }})
    type: Optional[ControlTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
