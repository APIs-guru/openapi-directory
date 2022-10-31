from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateThingTypePathParams:
    thing_type_name: str = field(default=None, metadata={'path_param': { 'field_name': 'thingTypeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateThingTypeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateThingTypeRequestBodyThingTypeProperties:
    searchable_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchableAttributes' }})
    thing_type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeDescription' }})
    

@dataclass_json
@dataclass
class CreateThingTypeRequestBody:
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thing_type_properties: Optional[CreateThingTypeRequestBodyThingTypeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeProperties' }})
    

@dataclass
class CreateThingTypeRequest:
    path_params: CreateThingTypePathParams = field(default=None)
    headers: CreateThingTypeHeaders = field(default=None)
    request: CreateThingTypeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateThingTypeResponse:
    content_type: str = field(default=None)
    create_thing_type_response: Optional[shared.CreateThingTypeResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
