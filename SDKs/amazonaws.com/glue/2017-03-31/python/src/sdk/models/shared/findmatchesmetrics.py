from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindMatchesMetrics:
    r"""FindMatchesMetrics
    The evaluation metrics for the find matches algorithm. The quality of your machine learning transform is measured by getting your transform to predict some matches and comparing the results to known matches from the same dataset. The quality metrics are based on a subset of your data, so they are not precise.
    """
    
    area_under_pr_curve: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AreaUnderPRCurve') }})
    column_importances: Optional[List[ColumnImportance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnImportances') }})
    confusion_matrix: Optional[ConfusionMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfusionMatrix') }})
    f1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    
