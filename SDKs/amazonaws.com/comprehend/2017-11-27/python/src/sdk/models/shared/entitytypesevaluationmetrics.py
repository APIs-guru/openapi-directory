from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EntityTypesEvaluationMetrics:
    r"""EntityTypesEvaluationMetrics
    Detailed information about the accuracy of an entity recognizer for a specific entity type. 
    """
    
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1Score') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    
