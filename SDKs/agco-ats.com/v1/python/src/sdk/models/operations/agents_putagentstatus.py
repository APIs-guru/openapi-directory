from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsPutAgentStatusPathParams:
    agent_id: int = field(metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsPutAgentStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_agent_status: Optional[shared.BuildSystemSharedDtoAgentStatus] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_agent_status1: Optional[shared.BuildSystemSharedDtoAgentStatus] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_agent_status2: Optional[shared.BuildSystemSharedDtoAgentStatus] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AgentsPutAgentStatusRequest:
    path_params: AgentsPutAgentStatusPathParams = field()
    request: AgentsPutAgentStatusRequests = field()
    

@dataclass
class AgentsPutAgentStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
