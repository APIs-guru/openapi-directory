from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateBlueprintRequest:
    blueprint_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintLocation' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
