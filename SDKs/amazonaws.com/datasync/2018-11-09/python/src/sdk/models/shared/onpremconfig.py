from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnPremConfig:
    r"""OnPremConfig
    A list of Amazon Resource Names (ARNs) of agents to use for a Network File System (NFS) location.
    """
    
    agent_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArns') }})
    
