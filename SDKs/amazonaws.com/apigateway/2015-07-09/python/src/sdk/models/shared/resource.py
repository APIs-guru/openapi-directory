from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import method


@dataclass_json
@dataclass
class Resource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    path_part: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathPart' }})
    resource_methods: Optional[dict[str, method.Method]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceMethods' }})
    
