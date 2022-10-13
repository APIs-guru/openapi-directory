from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import identitytype_enum


@dataclass_json
@dataclass
class ListStudioSessionMappingsInput:
    identity_type: Optional[identitytype_enum.IdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityType' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    studio_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioId' }})
    
