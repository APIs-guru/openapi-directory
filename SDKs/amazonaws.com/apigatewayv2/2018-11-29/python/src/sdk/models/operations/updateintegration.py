from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateIntegrationPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    integration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'integrationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIntegrationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateIntegrationRequestBodyConnectionTypeEnum(str, Enum):
    INTERNET = "INTERNET"
    VPC_LINK = "VPC_LINK"

class UpdateIntegrationRequestBodyContentHandlingStrategyEnum(str, Enum):
    CONVERT_TO_BINARY = "CONVERT_TO_BINARY"
    CONVERT_TO_TEXT = "CONVERT_TO_TEXT"

class UpdateIntegrationRequestBodyIntegrationTypeEnum(str, Enum):
    AWS = "AWS"
    HTTP = "HTTP"
    MOCK = "MOCK"
    HTTP_PROXY = "HTTP_PROXY"
    AWS_PROXY = "AWS_PROXY"

class UpdateIntegrationRequestBodyPassthroughBehaviorEnum(str, Enum):
    WHEN_NO_MATCH = "WHEN_NO_MATCH"
    NEVER = "NEVER"
    WHEN_NO_TEMPLATES = "WHEN_NO_TEMPLATES"


@dataclass_json
@dataclass
class UpdateIntegrationRequestBodyTLSConfig:
    server_name_to_verify: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerNameToVerify' }})
    

@dataclass_json
@dataclass
class UpdateIntegrationRequestBody:
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connection_type: Optional[UpdateIntegrationRequestBodyConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    content_handling_strategy: Optional[UpdateIntegrationRequestBodyContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHandlingStrategy' }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialsArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    integration_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationMethod' }})
    integration_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationSubtype' }})
    integration_type: Optional[UpdateIntegrationRequestBodyIntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationType' }})
    integration_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationUri' }})
    passthrough_behavior: Optional[UpdateIntegrationRequestBodyPassthroughBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passthroughBehavior' }})
    payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadFormatVersion' }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParameters' }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTemplates' }})
    response_parameters: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParameters' }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateSelectionExpression' }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMillis' }})
    tls_config: Optional[UpdateIntegrationRequestBodyTLSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsConfig' }})
    

@dataclass
class UpdateIntegrationRequest:
    path_params: UpdateIntegrationPathParams = field(default=None)
    headers: UpdateIntegrationHeaders = field(default=None)
    request: UpdateIntegrationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateIntegrationResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_integration_result: Optional[shared.UpdateIntegrationResult] = field(default=None)
    
