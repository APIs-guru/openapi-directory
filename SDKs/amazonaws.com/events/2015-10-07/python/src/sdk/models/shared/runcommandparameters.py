from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import runcommandtarget


@dataclass_json
@dataclass
class RunCommandParameters:
    run_command_targets: List[runcommandtarget.RunCommandTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunCommandTargets' }})
    
