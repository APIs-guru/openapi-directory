from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identitytype_enum


@dataclass_json
@dataclass
class CreateStudioSessionMappingInput:
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityName' }})
    identity_type: identitytype_enum.IdentityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    session_policy_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionPolicyArn' }})
    studio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioId' }})
    
