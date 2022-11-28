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
class GetDeploymentStatusResponse:
    deployment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentStatus') }})
    deployment_type: Optional[DeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    error_details: Optional[List[ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetails') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    
