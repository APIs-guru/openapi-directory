from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listener


@dataclass_json
@dataclass
class ListListenersResponse:
    listeners: Optional[List[listener.Listener]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Listeners' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
