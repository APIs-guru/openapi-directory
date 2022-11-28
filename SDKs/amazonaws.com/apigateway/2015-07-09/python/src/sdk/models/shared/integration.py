from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Integration:
    r"""Integration
    <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class=\"remarks\">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class=\"seeAlso\"> <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html\">Creating an API</a> </div>
    """
    
    cache_key_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheKeyParameters') }})
    cache_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheNamespace') }})
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    connection_type: Optional[ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    content_handling: Optional[ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHandling') }})
    credentials: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    integration_responses: Optional[dict[str, IntegrationResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationResponses') }})
    passthrough_behavior: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passthroughBehavior') }})
    request_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParameters') }})
    request_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTemplates') }})
    timeout_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMillis') }})
    tls_config: Optional[TLSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsConfig') }})
    type: Optional[IntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
