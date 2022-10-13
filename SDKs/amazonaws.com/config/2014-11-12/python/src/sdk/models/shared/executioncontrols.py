from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ssmcontrols


@dataclass_json
@dataclass
class ExecutionControls:
    ssm_controls: Optional[ssmcontrols.SsmControls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SsmControls' }})
    
