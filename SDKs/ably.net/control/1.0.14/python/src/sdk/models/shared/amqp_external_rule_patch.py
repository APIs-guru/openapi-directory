from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

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
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePatchTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    headers: Optional[List[AmqpExternalRulePatchTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    mandatory_route: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatoryRoute' }})
    message_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageTtl' }})
    persistent_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentMessages' }})
    routing_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingKey' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePatch:
    request_mode: Optional[AmqpExternalRulePatchRequestModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: Optional[AmqpExternalRulePatchRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: Optional[rule_source.RuleSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[AmqpExternalRulePatchStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target: Optional[AmqpExternalRulePatchTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
