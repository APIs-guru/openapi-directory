from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import objectreference
from . import objectreference


@dataclass_json
@dataclass
class BatchAttachObject:
    child_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChildReference' }})
    link_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkName' }})
    parent_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentReference' }})
    
