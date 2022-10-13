from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnimportance
from . import confusionmatrix


@dataclass_json
@dataclass
class FindMatchesMetrics:
    area_under_pr_curve: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AreaUnderPRCurve' }})
    column_importances: Optional[List[columnimportance.ColumnImportance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColumnImportances' }})
    confusion_matrix: Optional[confusionmatrix.ConfusionMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfusionMatrix' }})
    f1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'F1' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Precision' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recall' }})
    
