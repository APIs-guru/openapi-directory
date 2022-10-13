from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import objectreference


@dataclass_json
@dataclass
class BatchGetObjectInformation:
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    
