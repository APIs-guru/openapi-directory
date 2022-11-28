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
class PutIntegrationPathParams:
    http_method: str = field(metadata={'path_param': { 'field_name': 'http_method', 'style': 'simple', 'explode': False }})
    resource_id: str = field(metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutIntegrationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class PutIntegrationRequestBodyConnectionTypeEnum(str, Enum):
    INTERNET = "INTERNET"
    VPC_LINK = "VPC_LINK"

class PutIntegrationRequestBodyContentHandlingEnum(str, Enum):
    CONVERT_TO_BINARY = "CONVERT_TO_BINARY"
    CONVERT_TO_TEXT = "CONVERT_TO_TEXT"


@dataclass_json
@dataclass
class PutIntegrationRequestBodyTLSConfig:
    insecure_skip_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecureSkipVerification') }})
    
class PutIntegrationRequestBodyTypeEnum(str, Enum):
    HTTP = "HTTP"
    AWS = "AWS"
    MOCK = "MOCK"
    HTTP_PROXY = "HTTP_PROXY"
    AWS_PROXY = "AWS_PROXY"


@dataclass_json
@dataclass
class PutIntegrationRequestBody:
    type: PutIntegrationRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    cache_key_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheKeyParameters') }})
    cache_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheNamespace') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    connection_type: Optional[PutIntegrationRequestBodyConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    content_handling: Optional[PutIntegrationRequestBodyContentHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHandling') }})
    credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    passthrough_behavior: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughBehavior') }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParameters') }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTemplates') }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMillis') }})
    tls_config: Optional[PutIntegrationRequestBodyTLSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsConfig') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class PutIntegrationRequest:
    headers: PutIntegrationHeaders = field()
    path_params: PutIntegrationPathParams = field()
    request: PutIntegrationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutIntegrationResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    integration: Optional[shared.Integration] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
