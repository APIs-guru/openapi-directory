from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evaluation


@dataclass_json
@dataclass
class PutEvaluationsRequest:
    evaluations: Optional[List[evaluation.Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Evaluations' }})
    result_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultToken' }})
    test_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestMode' }})
    
