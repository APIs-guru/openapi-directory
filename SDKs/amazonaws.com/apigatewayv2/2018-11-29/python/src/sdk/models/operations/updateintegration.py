from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateIntegrationPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    integration_id: str = field(metadata={'path_param': { 'field_name': 'integrationId', 'style': 'simple', 'explode': False }})
    

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
    r"""UpdateIntegrationRequestBodyTLSConfig
    The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
    """
    
    server_name_to_verify: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerNameToVerify') }})
    

@dataclass_json
@dataclass
class UpdateIntegrationRequestBody:
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    connection_type: Optional[UpdateIntegrationRequestBodyConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    content_handling_strategy: Optional[UpdateIntegrationRequestBodyContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHandlingStrategy') }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    integration_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationMethod') }})
    integration_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationSubtype') }})
    integration_type: Optional[UpdateIntegrationRequestBodyIntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationType') }})
    integration_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationUri') }})
    passthrough_behavior: Optional[UpdateIntegrationRequestBodyPassthroughBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughBehavior') }})
    payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadFormatVersion') }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParameters') }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTemplates') }})
    response_parameters: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateSelectionExpression') }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMillis') }})
    tls_config: Optional[UpdateIntegrationRequestBodyTLSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsConfig') }})
    

@dataclass
class UpdateIntegrationRequest:
    headers: UpdateIntegrationHeaders = field()
    path_params: UpdateIntegrationPathParams = field()
    request: UpdateIntegrationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateIntegrationResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_integration_result: Optional[shared.UpdateIntegrationResult] = field(default=None)
    
