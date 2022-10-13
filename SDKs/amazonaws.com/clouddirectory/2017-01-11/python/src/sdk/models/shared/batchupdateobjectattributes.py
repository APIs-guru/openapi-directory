from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import objectattributeupdate
from . import objectreference


@dataclass_json
@dataclass
class BatchUpdateObjectAttributes:
    attribute_updates: List[objectattributeupdate.ObjectAttributeUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeUpdates' }})
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    
