from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClassifierEvaluationMetrics:
    r"""ClassifierEvaluationMetrics
    Describes the result metrics for the test data associated with an documentation classifier.
    """
    
    accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accuracy') }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1Score') }})
    hamming_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HammingLoss') }})
    micro_f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MicroF1Score') }})
    micro_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MicroPrecision') }})
    micro_recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MicroRecall') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    
