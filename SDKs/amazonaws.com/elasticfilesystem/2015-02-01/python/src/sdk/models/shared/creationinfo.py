from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreationInfo:
    owner_gid: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerGid' }})
    owner_uid: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerUid' }})
    permissions: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    
