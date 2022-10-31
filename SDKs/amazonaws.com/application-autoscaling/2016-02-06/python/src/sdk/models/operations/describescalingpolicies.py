from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeScalingPoliciesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeScalingPoliciesXAmzTargetEnum(str, Enum):
    ANY_SCALE_FRONTEND_SERVICE_DESCRIBE_SCALING_POLICIES = "AnyScaleFrontendService.DescribeScalingPolicies"


@dataclass
class DescribeScalingPoliciesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeScalingPoliciesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeScalingPoliciesRequest:
    query_params: DescribeScalingPoliciesQueryParams = field(default=None)
    headers: DescribeScalingPoliciesHeaders = field(default=None)
    request: shared.DescribeScalingPoliciesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeScalingPoliciesResponse:
    concurrent_update_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_scaling_policies_response: Optional[shared.DescribeScalingPoliciesResponse] = field(default=None)
    failed_resource_access_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_next_token_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
