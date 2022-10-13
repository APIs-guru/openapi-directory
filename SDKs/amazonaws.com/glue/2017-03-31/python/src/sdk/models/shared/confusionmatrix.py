from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfusionMatrix:
    num_false_negatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumFalseNegatives' }})
    num_false_positives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumFalsePositives' }})
    num_true_negatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumTrueNegatives' }})
    num_true_positives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumTruePositives' }})
    
