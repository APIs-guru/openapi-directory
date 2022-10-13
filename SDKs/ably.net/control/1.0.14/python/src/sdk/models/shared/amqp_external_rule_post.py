from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rule_source

class AmqpExternalRulePostRequestModeEnum(str, Enum):
    SINGLE = "single"

class AmqpExternalRulePostRuleTypeEnum(str, Enum):
    AMQP_EXTERNAL = "amqp/external"


@dataclass_json
@dataclass
class AmqpExternalRulePostTargetHeaders:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePostTarget:
    enveloped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enveloped' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    headers: Optional[List[AmqpExternalRulePostTargetHeaders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    mandatory_route: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatoryRoute' }})
    message_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageTtl' }})
    persistent_messages: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentMessages' }})
    routing_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingKey' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AmqpExternalRulePost:
    request_mode: AmqpExternalRulePostRequestModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMode' }})
    rule_type: AmqpExternalRulePostRuleTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleType' }})
    source: rule_source.RuleSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    target: AmqpExternalRulePostTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
