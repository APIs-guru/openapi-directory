from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntityRecognizerEvaluationMetrics:
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'F1Score' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precision' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recall' }})
    
