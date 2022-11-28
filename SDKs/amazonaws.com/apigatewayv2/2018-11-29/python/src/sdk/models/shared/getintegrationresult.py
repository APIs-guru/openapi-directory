from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetIntegrationResult:
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiGatewayManaged') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionId') }})
    connection_type: Optional[ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionType') }})
    content_handling_strategy: Optional[ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentHandlingStrategy') }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CredentialsArn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    integration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationId') }})
    integration_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationMethod') }})
    integration_response_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationResponseSelectionExpression') }})
    integration_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationSubtype') }})
    integration_type: Optional[IntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationType') }})
    integration_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationUri') }})
    passthrough_behavior: Optional[PassthroughBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PassthroughBehavior') }})
    payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayloadFormatVersion') }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestParameters') }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestTemplates') }})
    response_parameters: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseParameters') }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateSelectionExpression') }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutInMillis') }})
    tls_config: Optional[TLSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TlsConfig') }})
    
