from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetGeneratedPolicyPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneratedPolicyQueryParams:
    include_resource_placeholders: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeResourcePlaceholders', 'style': 'form', 'explode': True }})
    include_service_level_template: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeServiceLevelTemplate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGeneratedPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneratedPolicyRequest:
    path_params: GetGeneratedPolicyPathParams = field(default=None)
    query_params: GetGeneratedPolicyQueryParams = field(default=None)
    headers: GetGeneratedPolicyHeaders = field(default=None)
    

@dataclass
class GetGeneratedPolicyResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_generated_policy_response: Optional[shared.GetGeneratedPolicyResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
