from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizersummary


@dataclass_json
@dataclass
class ListAuthorizersResponse:
    authorizers: Optional[List[authorizersummary.AuthorizerSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizers' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextMarker' }})
    
