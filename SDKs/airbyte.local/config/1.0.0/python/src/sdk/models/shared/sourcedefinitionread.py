from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceDefinitionRead:
    docker_image_tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImageTag') }})
    docker_repository: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_definition_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitionId') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationUrl') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    
