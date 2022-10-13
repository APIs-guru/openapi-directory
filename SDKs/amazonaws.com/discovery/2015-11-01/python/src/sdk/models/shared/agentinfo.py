from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import agentnetworkinfo
from . import agentstatus_enum


@dataclass_json
@dataclass
class AgentInfo:
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentId' }})
    agent_network_info_list: Optional[List[agentnetworkinfo.AgentNetworkInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentNetworkInfoList' }})
    agent_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentType' }})
    collection_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionStatus' }})
    connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorId' }})
    health: Optional[agentstatus_enum.AgentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    host_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostName' }})
    last_health_ping_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastHealthPingTime' }})
    registered_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
