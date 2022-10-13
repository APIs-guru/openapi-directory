from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregateevaluationresult


@dataclass_json
@dataclass
class GetAggregateComplianceDetailsByConfigRuleResponse:
    aggregate_evaluation_results: Optional[List[aggregateevaluationresult.AggregateEvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AggregateEvaluationResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
