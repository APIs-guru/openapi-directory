from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDynamicThingGroupPathParams:
    thing_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'thingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDynamicThingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateDynamicThingGroupRequestBodyThingGroupProperties:
    attribute_payload: Optional[shared.AttributePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePayload' }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupDescription' }})
    

@dataclass_json
@dataclass
class CreateDynamicThingGroupRequestBody:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVersion' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thing_group_properties: Optional[CreateDynamicThingGroupRequestBodyThingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupProperties' }})
    

@dataclass
class CreateDynamicThingGroupRequest:
    path_params: CreateDynamicThingGroupPathParams = field(default=None)
    headers: CreateDynamicThingGroupHeaders = field(default=None)
    request: CreateDynamicThingGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDynamicThingGroupResponse:
    content_type: str = field(default=None)
    create_dynamic_thing_group_response: Optional[shared.CreateDynamicThingGroupResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_query_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
