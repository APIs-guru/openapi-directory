from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedAgentStateChange:
    r"""ManagedAgentStateChange
    An object representing a change in state for a managed agent.
    """
    
    container_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    managed_agent_name: ManagedAgentNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedAgentName') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
