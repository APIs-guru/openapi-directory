from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScpActionDefinition:
    r"""ScpActionDefinition
     The service control policies (SCP) action definition details. 
    """
    
    policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    target_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetIds') }})
    
