from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetLifecyclePolicyPreviewQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetLifecyclePolicyPreviewXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_LIFECYCLE_POLICY_PREVIEW = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"


@dataclass
class GetLifecyclePolicyPreviewHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetLifecyclePolicyPreviewXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLifecyclePolicyPreviewRequest:
    query_params: GetLifecyclePolicyPreviewQueryParams = field(default=None)
    headers: GetLifecyclePolicyPreviewHeaders = field(default=None)
    request: shared.GetLifecyclePolicyPreviewRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetLifecyclePolicyPreviewResponse:
    content_type: str = field(default=None)
    get_lifecycle_policy_preview_response: Optional[shared.GetLifecyclePolicyPreviewResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    lifecycle_policy_preview_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
