from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IftttRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class IftttRulePostRuleTypeEnum(str, Enum):
    HTTP_IFTTT = "http/ifttt"

class IftttRulePostStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class IftttRulePostTarget:
    event_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    webhook_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookKey') }})
    

@dataclass_json
@dataclass
class IftttRulePost:
    request_mode: IftttRulePostRequestModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMode') }})
    rule_type: IftttRulePostRuleTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleType') }})
    source: RuleSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: IftttRulePostTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    status: Optional[IftttRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
