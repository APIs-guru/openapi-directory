from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import webhookauthenticationtype_enum
from . import webhookauthconfiguration
from . import webhookfilterrule


@dataclass_json
@dataclass
class WebhookDefinition:
    authentication: webhookauthenticationtype_enum.WebhookAuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication' }})
    authentication_configuration: webhookauthconfiguration.WebhookAuthConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationConfiguration' }})
    filters: List[webhookfilterrule.WebhookFilterRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target_action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAction' }})
    target_pipeline: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPipeline' }})
    
