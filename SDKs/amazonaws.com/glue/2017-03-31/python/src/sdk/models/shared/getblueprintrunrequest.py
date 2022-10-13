from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetBlueprintRunRequest:
    blueprint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintName' }})
    run_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    
