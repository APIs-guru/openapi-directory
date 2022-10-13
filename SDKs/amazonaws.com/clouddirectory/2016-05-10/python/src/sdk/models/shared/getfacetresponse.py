from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import facet


@dataclass_json
@dataclass
class GetFacetResponse:
    facet: Optional[facet.Facet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Facet' }})
    
