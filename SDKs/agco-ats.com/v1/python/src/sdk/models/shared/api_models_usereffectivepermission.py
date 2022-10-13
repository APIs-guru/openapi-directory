from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIModelsUserEffectivePermission:
    permission_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionId' }})
    permission_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionName' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }})
    
