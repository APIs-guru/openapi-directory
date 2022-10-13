from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeploymentCircuitBreaker:
    enable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enable' }})
    rollback: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollback' }})
    
