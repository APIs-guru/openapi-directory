from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import objectreference
from . import schemafacet


@dataclass_json
@dataclass
class BatchGetObjectAttributes:
    attribute_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeNames' }})
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    schema_facet: schemafacet.SchemaFacet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacet' }})
    
