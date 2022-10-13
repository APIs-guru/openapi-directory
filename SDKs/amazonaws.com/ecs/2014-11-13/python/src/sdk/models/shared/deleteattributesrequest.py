from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attribute


@dataclass_json
@dataclass
class DeleteAttributesRequest:
    attributes: List[attribute.Attribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    
