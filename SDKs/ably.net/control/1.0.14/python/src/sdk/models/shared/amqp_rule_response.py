from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class AmqpRuleResponseRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpRuleResponseRuleTypeEnum(str, Enum):
    AMQP = "amqp"

class AmqpRuleResponseStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class AmqpRuleResponseTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AmqpRuleResponseTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    headers: Optional[List[AmqpRuleResponseTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    queue_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueId' }})
    

@dataclass_json
@dataclass
class AmqpRuleResponse:
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    created: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    modified: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified' }})
    request_mode: AmqpRuleResponseRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: AmqpRuleResponseRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AmqpRuleResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: AmqpRuleResponseTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
