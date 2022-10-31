from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListPoliciesActionEnum(str, Enum):
    LIST_POLICIES = "ListPolicies"

class GetListPoliciesPolicyUsageFilterEnum(str, Enum):
    PERMISSIONS_POLICY = "PermissionsPolicy"
    PERMISSIONS_BOUNDARY = "PermissionsBoundary"

class GetListPoliciesScopeEnum(str, Enum):
    ALL = "All"
    AWS = "AWS"
    LOCAL = "Local"

class GetListPoliciesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetListPoliciesQueryParams:
    action: GetListPoliciesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    only_attached: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'OnlyAttached', 'style': 'form', 'explode': True }})
    path_prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PathPrefix', 'style': 'form', 'explode': True }})
    policy_usage_filter: Optional[GetListPoliciesPolicyUsageFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'PolicyUsageFilter', 'style': 'form', 'explode': True }})
    scope: Optional[GetListPoliciesScopeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Scope', 'style': 'form', 'explode': True }})
    version: GetListPoliciesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListPoliciesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListPoliciesRequest:
    query_params: GetListPoliciesQueryParams = field(default=None)
    headers: GetListPoliciesHeaders = field(default=None)
    

@dataclass
class GetListPoliciesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
