from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import attributekeyandvalue
from . import objectreference
from . import schemafacet


@dataclass_json
@dataclass
class BatchAddFacetToObject:
    object_attribute_list: List[attributekeyandvalue.AttributeKeyAndValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectAttributeList' }})
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    schema_facet: schemafacet.SchemaFacet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacet' }})
    
