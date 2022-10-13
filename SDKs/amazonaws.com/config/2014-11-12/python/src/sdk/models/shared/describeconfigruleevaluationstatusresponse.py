from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configruleevaluationstatus


@dataclass_json
@dataclass
class DescribeConfigRuleEvaluationStatusResponse:
    config_rules_evaluation_status: Optional[List[configruleevaluationstatus.ConfigRuleEvaluationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRulesEvaluationStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
