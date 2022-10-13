from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import documentationversion


@dataclass_json
@dataclass
class DocumentationVersions:
    items: Optional[List[documentationversion.DocumentationVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
