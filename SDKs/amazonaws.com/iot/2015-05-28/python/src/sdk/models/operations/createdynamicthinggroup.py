from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDynamicThingGroupPathParams:
    thing_group_name: str = field(metadata={'path_param': { 'field_name': 'thingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDynamicThingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDynamicThingGroupRequestBodyThingGroupProperties:
    r"""CreateDynamicThingGroupRequestBodyThingGroupProperties
    Thing group properties.
    """
    
    attribute_payload: Optional[shared.AttributePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePayload') }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupDescription') }})
    

@dataclass_json
@dataclass
class CreateDynamicThingGroupRequestBody:
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexName') }})
    query_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryVersion') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thing_group_properties: Optional[CreateDynamicThingGroupRequestBodyThingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupProperties') }})
    

@dataclass
class CreateDynamicThingGroupRequest:
    headers: CreateDynamicThingGroupHeaders = field()
    path_params: CreateDynamicThingGroupPathParams = field()
    request: CreateDynamicThingGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDynamicThingGroupResponse:
    content_type: str = field()
    status_code: int = field()
    create_dynamic_thing_group_response: Optional[shared.CreateDynamicThingGroupResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_query_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
