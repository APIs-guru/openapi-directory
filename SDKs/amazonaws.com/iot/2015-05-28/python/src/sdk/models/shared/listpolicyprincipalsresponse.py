from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListPolicyPrincipalsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextMarker' }})
    principals: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principals' }})
    
