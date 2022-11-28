from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsPutAgentPathParams:
    agent_id: int = field(metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsPutAgentRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_agent: Optional[shared.BuildSystemSharedDtoAgentInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_agent1: Optional[shared.BuildSystemSharedDtoAgentInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_agent2: Optional[shared.BuildSystemSharedDtoAgentInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AgentsPutAgentRequest:
    path_params: AgentsPutAgentPathParams = field()
    request: AgentsPutAgentRequestsInput = field()
    

@dataclass
class AgentsPutAgentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
