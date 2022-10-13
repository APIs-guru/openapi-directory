from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import evaluation


@dataclass_json
@dataclass
class EvaluatePullRequestApprovalRulesOutput:
    evaluation: evaluation.Evaluation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluation' }})
    
