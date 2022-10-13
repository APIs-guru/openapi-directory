from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import documentationpartlocation


@dataclass_json
@dataclass
class DocumentationPart:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: Optional[documentationpartlocation.DocumentationPartLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
