from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import componentversion


@dataclass_json
@dataclass
class ListComponentsResponse:
    component_version_list: Optional[List[componentversion.ComponentVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersionList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
