from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class AmqpRulePatchRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpRulePatchRuleTypeEnum(str, Enum):
    AMQP = "amqp"

class AmqpRulePatchStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AmqpRulePatchTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AmqpRulePatchTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    headers: Optional[List[AmqpRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    queue_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueId' }})
    

@dataclass_json
@dataclass
class AmqpRulePatch:
    request_mode: Optional[AmqpRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: Optional[AmqpRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: Optional[rule_source.RuleSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AmqpRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: Optional[AmqpRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
