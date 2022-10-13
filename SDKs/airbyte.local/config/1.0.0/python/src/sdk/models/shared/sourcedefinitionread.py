from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceDefinitionRead:
    docker_image_tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerImageTag' }})
    docker_repository: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerRepository' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationUrl' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDefinitionId' }})
    
