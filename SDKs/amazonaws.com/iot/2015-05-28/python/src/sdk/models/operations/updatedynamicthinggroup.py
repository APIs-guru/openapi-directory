from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDynamicThingGroupPathParams:
    thing_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'thingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDynamicThingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDynamicThingGroupRequestBodyThingGroupProperties:
    attribute_payload: Optional[shared.AttributePayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributePayload' }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupDescription' }})
    

@dataclass_json
@dataclass
class UpdateDynamicThingGroupRequestBody:
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedVersion' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexName' }})
    query_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryString' }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVersion' }})
    thing_group_properties: UpdateDynamicThingGroupRequestBodyThingGroupProperties = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupProperties' }})
    

@dataclass
class UpdateDynamicThingGroupRequest:
    path_params: UpdateDynamicThingGroupPathParams = field(default=None)
    headers: UpdateDynamicThingGroupHeaders = field(default=None)
    request: UpdateDynamicThingGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDynamicThingGroupResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_query_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_dynamic_thing_group_response: Optional[shared.UpdateDynamicThingGroupResponse] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
