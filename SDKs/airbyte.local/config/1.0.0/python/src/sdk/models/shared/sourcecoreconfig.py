from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceCoreConfig:
    connection_configuration: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionConfiguration' }})
    source_definition_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceDefinitionId' }})
    
