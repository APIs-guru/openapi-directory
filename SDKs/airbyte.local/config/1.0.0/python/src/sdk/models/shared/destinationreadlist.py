from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import destinationread


@dataclass_json
@dataclass
class DestinationReadList:
    destinations: List[destinationread.DestinationRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    
