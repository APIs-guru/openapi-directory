from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostAgentProfilePathParams:
    profiling_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAgentProfileQueryParams:
    profile_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'profileToken', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAgentProfileHeaders:
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostAgentProfileRequestBody:
    agent_profile: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentProfile' }})
    

@dataclass
class PostAgentProfileRequest:
    path_params: PostAgentProfilePathParams = field(default=None)
    query_params: PostAgentProfileQueryParams = field(default=None)
    headers: PostAgentProfileHeaders = field(default=None)
    request: PostAgentProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAgentProfileResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    post_agent_profile_response: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
