from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServerProcess:
    concurrent_executions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConcurrentExecutions' }})
    launch_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchPath' }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
