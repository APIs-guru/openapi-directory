from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evaluation


@dataclass_json
@dataclass
class PutEvaluationsResponse:
    failed_evaluations: Optional[List[evaluation.Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedEvaluations' }})
    
