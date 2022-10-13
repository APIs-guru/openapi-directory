from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectiontype_enum
from . import contenthandlingstrategy_enum
from . import integrationresponse
from . import tlsconfig
from . import integrationtype_enum


@dataclass_json
@dataclass
class Integration:
    cache_key_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheKeyParameters' }})
    cache_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheNamespace' }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    connection_type: Optional[connectiontype_enum.ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    content_handling: Optional[contenthandlingstrategy_enum.ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHandling' }})
    credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    integration_responses: Optional[dict[str, integrationresponse.IntegrationResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationResponses' }})
    passthrough_behavior: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passthroughBehavior' }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestParameters' }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTemplates' }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInMillis' }})
    tls_config: Optional[tlsconfig.TLSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsConfig' }})
    type: Optional[integrationtype_enum.IntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
