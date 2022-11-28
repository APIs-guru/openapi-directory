from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateRestAPIHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateRestAPIRequestBodyAPIKeySourceEnum(str, Enum):
    HEADER = "HEADER"
    AUTHORIZER = "AUTHORIZER"


@dataclass_json
@dataclass
class CreateRestAPIRequestBodyEndpointConfiguration:
    r"""CreateRestAPIRequestBodyEndpointConfiguration
    The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
    """
    
    types: Optional[List[shared.EndpointTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    vpc_endpoint_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcEndpointIds') }})
    

@dataclass_json
@dataclass
class CreateRestAPIRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    api_key_source: Optional[CreateRestAPIRequestBodyAPIKeySourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeySource') }})
    binary_media_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryMediaTypes') }})
    clone_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloneFrom') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disable_execute_api_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableExecuteApiEndpoint') }})
    endpoint_configuration: Optional[CreateRestAPIRequestBodyEndpointConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointConfiguration') }})
    minimum_compression_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCompressionSize') }})
    policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass
class CreateRestAPIRequest:
    headers: CreateRestAPIHeaders = field()
    request: CreateRestAPIRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRestAPIResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    rest_api: Optional[shared.RestAPI] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
