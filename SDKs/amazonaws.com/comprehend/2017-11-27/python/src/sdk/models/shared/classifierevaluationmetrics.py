from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClassifierEvaluationMetrics:
    accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accuracy' }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'F1Score' }})
    hamming_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HammingLoss' }})
    micro_f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MicroF1Score' }})
    micro_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MicroPrecision' }})
    micro_recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MicroRecall' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precision' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recall' }})
    
