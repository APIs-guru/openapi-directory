from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AgentFilter:
    r"""AgentFilter
    Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
    """
    
    agent_health_codes: List[AgentHealthCodeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealthCodes') }})
    agent_healths: List[AgentHealthEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealths') }})
    
