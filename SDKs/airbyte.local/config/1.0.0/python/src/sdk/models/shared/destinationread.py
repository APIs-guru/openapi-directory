from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DestinationRead:
    connection_configuration: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionConfiguration') }})
    destination_definition_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDefinitionId') }})
    destination_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    destination_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationName') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    workspace_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
