from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import run


@dataclass_json
@dataclass
class StopRunResult:
    run: Optional[run.Run] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'run' }})
    
