from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchmakingruleset


@dataclass_json
@dataclass
class DescribeMatchmakingRuleSetsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    rule_sets: List[matchmakingruleset.MatchmakingRuleSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSets' }})
    
