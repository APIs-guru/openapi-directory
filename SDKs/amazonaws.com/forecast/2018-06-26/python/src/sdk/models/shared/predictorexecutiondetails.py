from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredictorExecutionDetails:
    r"""PredictorExecutionDetails
    Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.
    """
    
    predictor_executions: Optional[List[PredictorExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorExecutions') }})
    
