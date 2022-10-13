from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import connectionread


@dataclass_json
@dataclass
class ConnectionReadList:
    connections: List[connectionread.ConnectionRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
