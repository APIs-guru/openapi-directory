from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsPutAgentStatusPathParams:
    agent_id: int = field(default=None, metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsPutAgentStatusRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    build_system_shared_dto_agent_status: Optional[shared.BuildSystemSharedDtoAgentStatus] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_agent_status1: Optional[shared.BuildSystemSharedDtoAgentStatus] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_agent_status2: Optional[shared.BuildSystemSharedDtoAgentStatus] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AgentsPutAgentStatusRequest:
    path_params: AgentsPutAgentStatusPathParams = field(default=None)
    request: AgentsPutAgentStatusRequests = field(default=None)
    

@dataclass
class AgentsPutAgentStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
