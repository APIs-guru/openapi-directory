from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfusionMatrix:
    r"""ConfusionMatrix
    <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href=\"https://en.wikipedia.org/wiki/Confusion_matrix\">Confusion matrix</a> in Wikipedia.</p>
    """
    
    num_false_negatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumFalseNegatives') }})
    num_false_positives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumFalsePositives') }})
    num_true_negatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumTrueNegatives') }})
    num_true_positives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumTruePositives') }})
    
