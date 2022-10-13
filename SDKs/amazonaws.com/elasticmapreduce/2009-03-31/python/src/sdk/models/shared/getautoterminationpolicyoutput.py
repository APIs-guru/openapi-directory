from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoterminationpolicy


@dataclass_json
@dataclass
class GetAutoTerminationPolicyOutput:
    auto_termination_policy: Optional[autoterminationpolicy.AutoTerminationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoTerminationPolicy' }})
    
