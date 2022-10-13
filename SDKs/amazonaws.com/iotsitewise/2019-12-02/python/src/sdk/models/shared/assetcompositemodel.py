from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetCompositeModel:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
