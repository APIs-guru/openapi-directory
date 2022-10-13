from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListProfileObjectsItem:
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Object' }})
    object_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectTypeName' }})
    profile_object_unique_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileObjectUniqueKey' }})
    
