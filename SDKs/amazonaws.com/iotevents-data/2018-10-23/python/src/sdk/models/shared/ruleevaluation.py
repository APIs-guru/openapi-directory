from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simpleruleevaluation


@dataclass_json
@dataclass
class RuleEvaluation:
    simple_rule_evaluation: Optional[simpleruleevaluation.SimpleRuleEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleRuleEvaluation' }})
    
