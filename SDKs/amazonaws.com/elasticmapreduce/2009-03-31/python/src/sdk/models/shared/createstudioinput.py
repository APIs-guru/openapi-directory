from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authmode_enum
from . import tag


@dataclass_json
@dataclass
class CreateStudioInput:
    auth_mode: authmode_enum.AuthModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthMode' }})
    default_s3_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultS3Location' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    engine_security_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineSecurityGroupId' }})
    idp_auth_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpAuthUrl' }})
    idp_relay_state_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpRelayStateParameterName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    service_role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceRole' }})
    subnet_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserRole' }})
    vpc_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    workspace_security_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceSecurityGroupId' }})
    
