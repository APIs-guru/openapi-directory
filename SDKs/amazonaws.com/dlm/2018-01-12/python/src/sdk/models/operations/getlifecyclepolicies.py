from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetLifecyclePoliciesStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ERROR = "ERROR"


@dataclass
class GetLifecyclePoliciesQueryParams:
    policy_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'policyIds', 'style': 'form', 'explode': True }})
    resource_types: Optional[List[shared.ResourceTypeValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'resourceTypes', 'style': 'form', 'explode': True }})
    state: Optional[GetLifecyclePoliciesStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    tags_to_add: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tagsToAdd', 'style': 'form', 'explode': True }})
    target_tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'targetTags', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLifecyclePoliciesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLifecyclePoliciesRequest:
    query_params: GetLifecyclePoliciesQueryParams = field(default=None)
    headers: GetLifecyclePoliciesHeaders = field(default=None)
    

@dataclass
class GetLifecyclePoliciesResponse:
    content_type: str = field(default=None)
    get_lifecycle_policies_response: Optional[shared.GetLifecyclePoliciesResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
