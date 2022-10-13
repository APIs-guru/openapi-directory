from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute
from . import scope


@dataclass_json
@dataclass
class ExclusionPreview:
    attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    recommendation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendation' }})
    scopes: List[scope.Scope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
