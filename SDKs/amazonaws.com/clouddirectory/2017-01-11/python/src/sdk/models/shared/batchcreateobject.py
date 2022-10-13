from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributekeyandvalue
from . import objectreference
from . import schemafacet


@dataclass_json
@dataclass
class BatchCreateObject:
    batch_reference_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchReferenceName' }})
    link_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LinkName' }})
    object_attribute_list: List[attributekeyandvalue.AttributeKeyAndValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeList' }})
    parent_reference: Optional[objectreference.ObjectReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentReference' }})
    schema_facet: List[schemafacet.SchemaFacet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacet' }})
    
