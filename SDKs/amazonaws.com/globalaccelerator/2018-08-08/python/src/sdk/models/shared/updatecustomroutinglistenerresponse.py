from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customroutinglistener


@dataclass_json
@dataclass
class UpdateCustomRoutingListenerResponse:
    listener: Optional[customroutinglistener.CustomRoutingListener] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Listener' }})
    
