from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidateMatchmakingRuleSetInput:
    rule_set_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSetBody' }})
    
