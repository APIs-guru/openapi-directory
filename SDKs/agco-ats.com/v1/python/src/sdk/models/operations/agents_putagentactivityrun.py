from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsPutAgentActivityRunPathParams:
    agent_id: int = field(metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsPutAgentActivityRunRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_activity_run: Optional[shared.BuildSystemSharedDtoActivityRunInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_activity_run1: Optional[shared.BuildSystemSharedDtoActivityRunInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_activity_run2: Optional[shared.BuildSystemSharedDtoActivityRunInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AgentsPutAgentActivityRunRequest:
    path_params: AgentsPutAgentActivityRunPathParams = field()
    request: AgentsPutAgentActivityRunRequestsInput = field()
    

@dataclass
class AgentsPutAgentActivityRunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
