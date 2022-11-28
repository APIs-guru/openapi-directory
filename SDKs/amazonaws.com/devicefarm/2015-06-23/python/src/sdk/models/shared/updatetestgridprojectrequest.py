from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTestGridProjectRequest:
    project_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vpc_config: Optional[TestGridVpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
