from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AmqpExternalRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpExternalRulePostRuleTypeEnum(str, Enum):
    AMQP_EXTERNAL = "amqp/external"


@dataclass_json
@dataclass
class AmqpExternalRulePostTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePostTarget:
    mandatory_route: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryRoute') }})
    persistent_messages: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentMessages') }})
    routing_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingKey') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enveloped') }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    headers: Optional[List[AmqpExternalRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    message_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTtl') }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePost:
    request_mode: AmqpExternalRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: AmqpExternalRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: AmqpExternalRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
