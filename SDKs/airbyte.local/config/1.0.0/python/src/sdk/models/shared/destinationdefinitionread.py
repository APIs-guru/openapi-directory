from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DestinationDefinitionRead:
    destination_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDefinitionId' }})
    docker_image_tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerImageTag' }})
    docker_repository: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerRepository' }})
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationUrl' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
