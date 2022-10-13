from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributekey
from . import objectreference


@dataclass_json
@dataclass
class BatchCreateIndex:
    batch_reference_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchReferenceName' }})
    is_unique: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsUnique' }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkName' }})
    ordered_indexed_attribute_list: List[attributekey.AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderedIndexedAttributeList' }})
    parent_reference: Optional[objectreference.ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentReference' }})
    
