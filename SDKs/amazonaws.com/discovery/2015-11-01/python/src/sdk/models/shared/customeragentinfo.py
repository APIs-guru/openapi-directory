from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerAgentInfo:
    active_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeAgents' }})
    black_listed_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blackListedAgents' }})
    healthy_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthyAgents' }})
    shutdown_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shutdownAgents' }})
    total_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalAgents' }})
    unhealthy_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthyAgents' }})
    unknown_agents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknownAgents' }})
    
