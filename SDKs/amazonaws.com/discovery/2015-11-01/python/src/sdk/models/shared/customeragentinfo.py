from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerAgentInfo:
    r"""CustomerAgentInfo
    Inventory data for installed discovery agents.
    """
    
    active_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeAgents') }})
    black_listed_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blackListedAgents') }})
    healthy_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyAgents') }})
    shutdown_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shutdownAgents') }})
    total_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAgents') }})
    unhealthy_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyAgents') }})
    unknown_agents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownAgents') }})
    
