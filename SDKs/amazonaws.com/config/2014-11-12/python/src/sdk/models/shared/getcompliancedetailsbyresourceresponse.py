from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evaluationresult


@dataclass_json
@dataclass
class GetComplianceDetailsByResourceResponse:
    evaluation_results: Optional[List[evaluationresult.EvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
