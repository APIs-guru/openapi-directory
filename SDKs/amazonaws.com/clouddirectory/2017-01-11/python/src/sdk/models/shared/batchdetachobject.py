from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectreference


@dataclass_json
@dataclass
class BatchDetachObject:
    batch_reference_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchReferenceName' }})
    link_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkName' }})
    parent_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentReference' }})
    
