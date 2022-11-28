from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AgentInfo:
    r"""AgentInfo
    Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent.
    """
    
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    agent_network_info_list: Optional[List[AgentNetworkInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentNetworkInfoList') }})
    agent_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentType') }})
    collection_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionStatus') }})
    connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorId') }})
    health: Optional[AgentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    host_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostName') }})
    last_health_ping_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastHealthPingTime') }})
    registered_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredTime') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
