from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import objectreference
from . import schemafacet


@dataclass_json
@dataclass
class BatchRemoveFacetFromObject:
    object_reference: objectreference.ObjectReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectReference' }})
    schema_facet: schemafacet.SchemaFacet = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacet' }})
    
