from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectiontype_enum
from . import contenthandlingstrategy_enum
from . import integrationtype_enum
from . import passthroughbehavior_enum
from . import tlsconfig


@dataclass_json
@dataclass
class UpdateIntegrationResult:
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiGatewayManaged' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionId' }})
    connection_type: Optional[connectiontype_enum.ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionType' }})
    content_handling_strategy: Optional[contenthandlingstrategy_enum.ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentHandlingStrategy' }})
    credentials_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CredentialsArn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    integration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationId' }})
    integration_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationMethod' }})
    integration_response_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationResponseSelectionExpression' }})
    integration_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationSubtype' }})
    integration_type: Optional[integrationtype_enum.IntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationType' }})
    integration_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationUri' }})
    passthrough_behavior: Optional[passthroughbehavior_enum.PassthroughBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PassthroughBehavior' }})
    payload_format_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayloadFormatVersion' }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestParameters' }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestTemplates' }})
    response_parameters: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseParameters' }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateSelectionExpression' }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutInMillis' }})
    tls_config: Optional[tlsconfig.TLSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TlsConfig' }})
    
