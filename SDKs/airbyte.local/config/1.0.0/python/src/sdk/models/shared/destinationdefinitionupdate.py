from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DestinationDefinitionUpdate:
    destination_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDefinitionId' }})
    docker_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerImageTag' }})
    
