from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import objectreference
from . import objectreference


@dataclass_json
@dataclass
class BatchDetachFromIndex:
    index_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexReference' }})
    target_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetReference' }})
    
