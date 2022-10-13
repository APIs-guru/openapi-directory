from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateBillingGroupPathParams:
    billing_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'billingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBillingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateBillingGroupRequestBodyBillingGroupProperties:
    billing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupDescription' }})
    

@dataclass_json
@dataclass
class CreateBillingGroupRequestBody:
    billing_group_properties: Optional[CreateBillingGroupRequestBodyBillingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupProperties' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateBillingGroupRequest:
    path_params: CreateBillingGroupPathParams = field(default=None)
    headers: CreateBillingGroupHeaders = field(default=None)
    request: CreateBillingGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBillingGroupResponse:
    content_type: str = field(default=None)
    create_billing_group_response: Optional[shared.CreateBillingGroupResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
