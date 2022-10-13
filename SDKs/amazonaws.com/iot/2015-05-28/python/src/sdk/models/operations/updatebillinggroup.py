from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateBillingGroupPathParams:
    billing_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'billingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBillingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateBillingGroupRequestBodyBillingGroupProperties:
    billing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupDescription' }})
    

@dataclass_json
@dataclass
class UpdateBillingGroupRequestBody:
    billing_group_properties: UpdateBillingGroupRequestBodyBillingGroupProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupProperties' }})
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedVersion' }})
    

@dataclass
class UpdateBillingGroupRequest:
    path_params: UpdateBillingGroupPathParams = field(default=None)
    headers: UpdateBillingGroupHeaders = field(default=None)
    request: UpdateBillingGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBillingGroupResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_billing_group_response: Optional[shared.UpdateBillingGroupResponse] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
