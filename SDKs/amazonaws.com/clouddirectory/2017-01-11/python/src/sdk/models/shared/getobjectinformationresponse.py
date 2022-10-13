from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemafacet


@dataclass_json
@dataclass
class GetObjectInformationResponse:
    object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectIdentifier' }})
    schema_facets: Optional[List[schemafacet.SchemaFacet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaFacets' }})
    
