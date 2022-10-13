from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListAccessPoliciesIdentityTypeEnum(str, Enum):
    USER = "USER"
    GROUP = "GROUP"
    IAM = "IAM"

class ListAccessPoliciesResourceTypeEnum(str, Enum):
    PORTAL = "PORTAL"
    PROJECT = "PROJECT"


@dataclass
class ListAccessPoliciesQueryParams:
    iam_arn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iamArn', 'style': 'form', 'explode': True }})
    identity_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'identityId', 'style': 'form', 'explode': True }})
    identity_type: Optional[ListAccessPoliciesIdentityTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'identityType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    resource_type: Optional[ListAccessPoliciesResourceTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'resourceType', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAccessPoliciesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListAccessPoliciesRequest:
    query_params: ListAccessPoliciesQueryParams = field(default=None)
    headers: ListAccessPoliciesHeaders = field(default=None)
    

@dataclass
class ListAccessPoliciesResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_access_policies_response: Optional[shared.ListAccessPoliciesResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
