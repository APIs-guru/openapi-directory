from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import attemptread
from . import logread


@dataclass_json
@dataclass
class AttemptInfoRead:
    attempt: attemptread.AttemptRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempt' }})
    logs: logread.LogRead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    
