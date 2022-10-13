from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import topicrule


@dataclass_json
@dataclass
class GetTopicRuleResponse:
    rule: Optional[topicrule.TopicRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    rule_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleArn' }})
    
