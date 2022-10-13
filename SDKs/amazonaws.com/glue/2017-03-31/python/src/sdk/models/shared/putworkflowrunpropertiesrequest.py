from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutWorkflowRunPropertiesRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    run_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    run_properties: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunProperties' }})
    
