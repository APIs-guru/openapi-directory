from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluationResult:
    r"""EvaluationResult
    The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
    """
    
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    test_windows: Optional[List[WindowSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestWindows') }})
    
