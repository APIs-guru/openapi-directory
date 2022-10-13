from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import destinationdefinitionread


@dataclass_json
@dataclass
class DestinationDefinitionReadList:
    destination_definitions: List[destinationdefinitionread.DestinationDefinitionRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDefinitions' }})
    
