from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metrics:
    r"""Metrics
    Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
    """
    
    average_weighted_quantile_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageWeightedQuantileLoss') }})
    error_metrics: Optional[List[ErrorMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMetrics') }})
    rmse: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RMSE') }})
    weighted_quantile_losses: Optional[List[WeightedQuantileLoss]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeightedQuantileLosses') }})
    
