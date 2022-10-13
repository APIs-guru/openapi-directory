from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentconfigurationstatus


@dataclass_json
@dataclass
class StartDataCollectionByAgentIdsResponse:
    agents_configuration_status: Optional[List[agentconfigurationstatus.AgentConfigurationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentsConfigurationStatus' }})
    
