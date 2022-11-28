from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AgentListEntry:
    r"""AgentListEntry
    Represents a single entry in a list of agents. <code>AgentListEntry</code> returns an array that contains a list of agents when the <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html\">ListAgents</a> operation is called.
    """
    
    agent_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentArn') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    status: Optional[AgentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
