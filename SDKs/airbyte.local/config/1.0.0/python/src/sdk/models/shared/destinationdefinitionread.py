from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DestinationDefinitionRead:
    destination_definition_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitionId') }})
    docker_image_tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImageTag') }})
    docker_repository: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    
