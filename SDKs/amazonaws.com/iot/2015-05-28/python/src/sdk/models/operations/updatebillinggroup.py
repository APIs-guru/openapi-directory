from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateBillingGroupPathParams:
    billing_group_name: str = field(metadata={'path_param': { 'field_name': 'billingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBillingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateBillingGroupRequestBodyBillingGroupProperties:
    r"""UpdateBillingGroupRequestBodyBillingGroupProperties
    The properties of a billing group.
    """
    
    billing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupDescription') }})
    

@dataclass_json
@dataclass
class UpdateBillingGroupRequestBody:
    billing_group_properties: UpdateBillingGroupRequestBodyBillingGroupProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupProperties') }})
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedVersion') }})
    

@dataclass
class UpdateBillingGroupRequest:
    headers: UpdateBillingGroupHeaders = field()
    path_params: UpdateBillingGroupPathParams = field()
    request: UpdateBillingGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateBillingGroupResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_billing_group_response: Optional[shared.UpdateBillingGroupResponse] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
