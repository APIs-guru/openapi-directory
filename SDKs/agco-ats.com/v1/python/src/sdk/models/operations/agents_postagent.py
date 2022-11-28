from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsPostAgentRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    build_system_shared_dto_agent: Optional[shared.BuildSystemSharedDtoAgentInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    build_system_shared_dto_agent1: Optional[shared.BuildSystemSharedDtoAgentInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    build_system_shared_dto_agent2: Optional[shared.BuildSystemSharedDtoAgentInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AgentsPostAgentRequest:
    request: AgentsPostAgentRequestsInput = field()
    

@dataclass
class AgentsPostAgentResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    agents_post_agent_200_application_json_int32_integer: Optional[int] = field(default=None)
    agents_post_agent_200_text_json_int32_integer: Optional[int] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
