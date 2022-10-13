from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateThingPathParams:
    thing_name: str = field(default=None, metadata={'path_param': { 'field_name': 'thingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateThingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateThingRequestBodyAttributePayload:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge' }})
    

@dataclass_json
@dataclass
class CreateThingRequestBody:
    attribute_payload: Optional[CreateThingRequestBodyAttributePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePayload' }})
    billing_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingGroupName' }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeName' }})
    

@dataclass
class CreateThingRequest:
    path_params: CreateThingPathParams = field(default=None)
    headers: CreateThingHeaders = field(default=None)
    request: CreateThingRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateThingResponse:
    content_type: str = field(default=None)
    create_thing_response: Optional[shared.CreateThingResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
