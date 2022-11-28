from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateBillingGroupPathParams:
    billing_group_name: str = field(metadata={'path_param': { 'field_name': 'billingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBillingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateBillingGroupRequestBodyBillingGroupProperties:
    r"""CreateBillingGroupRequestBodyBillingGroupProperties
    The properties of a billing group.
    """
    
    billing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupDescription') }})
    

@dataclass_json
@dataclass
class CreateBillingGroupRequestBody:
    billing_group_properties: Optional[CreateBillingGroupRequestBodyBillingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupProperties') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateBillingGroupRequest:
    headers: CreateBillingGroupHeaders = field()
    path_params: CreateBillingGroupPathParams = field()
    request: CreateBillingGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBillingGroupResponse:
    content_type: str = field()
    status_code: int = field()
    create_billing_group_response: Optional[shared.CreateBillingGroupResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
