from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import componentversionlistitem


@dataclass_json
@dataclass
class ListComponentVersionsResponse:
    component_versions: Optional[List[componentversionlistitem.ComponentVersionListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
