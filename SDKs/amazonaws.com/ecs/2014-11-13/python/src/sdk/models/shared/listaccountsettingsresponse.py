from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import setting


@dataclass_json
@dataclass
class ListAccountSettingsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    settings: Optional[List[setting.Setting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
