from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceUpdate:
    connection_configuration: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceId' }})
    
