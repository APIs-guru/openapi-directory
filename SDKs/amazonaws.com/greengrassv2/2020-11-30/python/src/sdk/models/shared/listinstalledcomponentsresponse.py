from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import installedcomponent


@dataclass_json
@dataclass
class ListInstalledComponentsResponse:
    installed_components: Optional[List[installedcomponent.InstalledComponent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installedComponents' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
