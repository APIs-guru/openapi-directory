from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import externalevaluation


@dataclass_json
@dataclass
class PutExternalEvaluationRequest:
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    external_evaluation: externalevaluation.ExternalEvaluation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalEvaluation' }})
    
