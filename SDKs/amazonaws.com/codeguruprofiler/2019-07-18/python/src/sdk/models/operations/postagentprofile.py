from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostAgentProfilePathParams:
    profiling_group_name: str = field(metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAgentProfileQueryParams:
    profile_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'profileToken', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAgentProfileHeaders:
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
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
    agent_profile: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentProfile') }})
    

@dataclass
class PostAgentProfileRequest:
    headers: PostAgentProfileHeaders = field()
    path_params: PostAgentProfilePathParams = field()
    query_params: PostAgentProfileQueryParams = field()
    request: PostAgentProfileRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAgentProfileResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    post_agent_profile_response: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
