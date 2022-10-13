from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateThingPathParams:
    thing_name: str = field(default=None, metadata={'path_param': { 'field_name': 'thingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateThingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateThingRequestBodyAttributePayload:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    merge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge' }})
    

@dataclass_json
@dataclass
class UpdateThingRequestBody:
    attribute_payload: Optional[UpdateThingRequestBodyAttributePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePayload' }})
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedVersion' }})
    remove_thing_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeThingType' }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeName' }})
    

@dataclass
class UpdateThingRequest:
    path_params: UpdateThingPathParams = field(default=None)
    headers: UpdateThingHeaders = field(default=None)
    request: UpdateThingRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateThingResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_thing_response: Optional[dict[str, Any]] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
