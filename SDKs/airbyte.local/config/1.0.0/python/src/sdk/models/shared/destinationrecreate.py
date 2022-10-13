from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DestinationRecreate:
    connection_configuration: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionConfiguration' }})
    destination_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDefinitionId' }})
    destination_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
