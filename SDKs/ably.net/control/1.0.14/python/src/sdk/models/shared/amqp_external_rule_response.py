from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AmqpExternalRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpExternalRuleResponseRuleTypeEnum(str, Enum):
    AMQP_EXTERNAL = "amqp/external"

class AmqpExternalRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AmqpExternalRuleResponseTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class AmqpExternalRuleResponseTarget:
    mandatory_route: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryRoute') }})
    persistent_messages: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentMessages') }})
    routing_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingKey') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[AmqpExternalRuleResponseTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    message_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTtl') }})
    

@dataclass_json
@dataclass
class AmqpExternalRuleResponse:
    request_mode: AmqpExternalRuleResponseRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AmqpExternalRuleResponseRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AmqpExternalRuleResponseTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    status: Optional[AmqpExternalRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
