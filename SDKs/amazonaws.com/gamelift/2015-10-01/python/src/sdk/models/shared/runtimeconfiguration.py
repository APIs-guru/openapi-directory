from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serverprocess


@dataclass_json
@dataclass
class RuntimeConfiguration:
    game_session_activation_timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionActivationTimeoutSeconds' }})
    max_concurrent_game_session_activations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrentGameSessionActivations' }})
    server_processes: Optional[List[serverprocess.ServerProcess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerProcesses' }})
    
