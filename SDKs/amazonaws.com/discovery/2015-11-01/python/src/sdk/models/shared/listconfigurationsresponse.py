from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListConfigurationsResponse:
    configurations: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
