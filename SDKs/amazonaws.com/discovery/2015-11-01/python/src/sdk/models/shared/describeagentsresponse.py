from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentinfo


@dataclass_json
@dataclass
class DescribeAgentsResponse:
    agents_info: Optional[List[agentinfo.AgentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentsInfo' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
