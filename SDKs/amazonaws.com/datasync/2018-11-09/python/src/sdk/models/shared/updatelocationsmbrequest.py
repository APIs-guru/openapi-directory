from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateLocationSmbRequest:
    location_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationArn') }})
    agent_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    mount_options: Optional[SmbMountOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    subdirectory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subdirectory') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
