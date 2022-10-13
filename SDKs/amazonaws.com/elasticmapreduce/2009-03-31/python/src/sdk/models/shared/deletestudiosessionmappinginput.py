from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identitytype_enum


@dataclass_json
@dataclass
class DeleteStudioSessionMappingInput:
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    identity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityName' }})
    identity_type: identitytype_enum.IdentityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    studio_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioId' }})
    
