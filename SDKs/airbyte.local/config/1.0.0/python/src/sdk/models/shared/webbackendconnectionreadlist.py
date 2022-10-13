from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import webbackendconnectionread


@dataclass_json
@dataclass
class WebBackendConnectionReadList:
    connections: List[webbackendconnectionread.WebBackendConnectionRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
