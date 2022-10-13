from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import facetattribute


@dataclass_json
@dataclass
class ListFacetAttributesResponse:
    attributes: Optional[List[facetattribute.FacetAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
