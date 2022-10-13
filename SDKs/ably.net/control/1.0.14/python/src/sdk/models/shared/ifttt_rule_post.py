from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rule_source

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
    event_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    webhook_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookKey' }})
    

@dataclass_json
@dataclass
class IftttRulePost:
    request_mode: IftttRulePostRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: IftttRulePostRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[IftttRulePostStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: IftttRulePostTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
