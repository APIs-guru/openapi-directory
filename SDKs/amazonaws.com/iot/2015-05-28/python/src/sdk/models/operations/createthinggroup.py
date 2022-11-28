from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateThingGroupPathParams:
    thing_group_name: str = field(metadata={'path_param': { 'field_name': 'thingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateThingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateThingGroupRequestBodyThingGroupProperties:
    r"""CreateThingGroupRequestBodyThingGroupProperties
    Thing group properties.
    """
    
    attribute_payload: Optional[shared.AttributePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributePayload') }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupDescription') }})
    

@dataclass_json
@dataclass
class CreateThingGroupRequestBody:
    parent_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentGroupName') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thing_group_properties: Optional[CreateThingGroupRequestBodyThingGroupProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupProperties') }})
    

@dataclass
class CreateThingGroupRequest:
    headers: CreateThingGroupHeaders = field()
    path_params: CreateThingGroupPathParams = field()
    request: CreateThingGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateThingGroupResponse:
    content_type: str = field()
    status_code: int = field()
    create_thing_group_response: Optional[shared.CreateThingGroupResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
