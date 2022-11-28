from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AmqpExternalRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpExternalRulePatchRuleTypeEnum(str, Enum):
    AMQP_EXTERNAL = "amqp/external"

class AmqpExternalRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AmqpExternalRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePatchTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[AmqpExternalRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    mandatory_route: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryRoute') }})
    message_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTtl') }})
    persistent_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentMessages') }})
    routing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingKey') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePatch:
    request_mode: Optional[AmqpExternalRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: Optional[AmqpExternalRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: Optional[RuleSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[AmqpExternalRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target: Optional[AmqpExternalRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
