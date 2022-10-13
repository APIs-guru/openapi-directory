from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackevaluationresult


@dataclass_json
@dataclass
class GetConformancePackComplianceDetailsResponse:
    conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    conformance_pack_rule_evaluation_results: Optional[List[conformancepackevaluationresult.ConformancePackEvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackRuleEvaluationResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
