from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutIntegrationPathParams:
    http_method: str = field(default=None, metadata={'path_param': { 'field_name': 'http_method', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

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
    insecure_skip_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecureSkipVerification' }})
    
class PutIntegrationRequestBodyTypeEnum(str, Enum):
    HTTP = "HTTP"
    AWS = "AWS"
    MOCK = "MOCK"
    HTTP_PROXY = "HTTP_PROXY"
    AWS_PROXY = "AWS_PROXY"


@dataclass_json
@dataclass
class PutIntegrationRequestBody:
    cache_key_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheKeyParameters' }})
    cache_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheNamespace' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connection_type: Optional[PutIntegrationRequestBodyConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    content_handling: Optional[PutIntegrationRequestBodyContentHandlingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHandling' }})
    credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    passthrough_behavior: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passthroughBehavior' }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParameters' }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTemplates' }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMillis' }})
    tls_config: Optional[PutIntegrationRequestBodyTLSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsConfig' }})
    type: PutIntegrationRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class PutIntegrationRequest:
    path_params: PutIntegrationPathParams = field(default=None)
    headers: PutIntegrationHeaders = field(default=None)
    request: PutIntegrationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutIntegrationResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    integration: Optional[shared.Integration] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
