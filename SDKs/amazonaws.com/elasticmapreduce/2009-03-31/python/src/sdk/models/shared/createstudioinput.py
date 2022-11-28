from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStudioInput:
    auth_mode: AuthModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthMode') }})
    default_s3_location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultS3Location') }})
    engine_security_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineSecurityGroupId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    service_role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    workspace_security_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceSecurityGroupId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    idp_auth_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdpAuthUrl') }})
    idp_relay_state_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdpRelayStateParameterName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserRole') }})
    
