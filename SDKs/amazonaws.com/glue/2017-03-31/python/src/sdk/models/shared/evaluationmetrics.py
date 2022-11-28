from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluationMetrics:
    r"""EvaluationMetrics
    Evaluation metrics provide an estimate of the quality of your machine learning transform.
    """
    
    transform_type: TransformTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformType') }})
    find_matches_metrics: Optional[FindMatchesMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindMatchesMetrics') }})
    
