from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredictorExecution:
    r"""PredictorExecution
    The algorithm used to perform a backtest and the status of those tests.
    """
    
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    test_windows: Optional[List[TestWindowSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestWindows') }})
    
