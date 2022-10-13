from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DestinationDefinitionIDRequestBody:
    destination_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDefinitionId' }})
    
