from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComputeEnvironmentOrder:
    compute_environment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironment' }})
    order: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
