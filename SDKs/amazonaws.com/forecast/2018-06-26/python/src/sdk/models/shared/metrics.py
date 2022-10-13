from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errormetric
from . import weightedquantileloss


@dataclass_json
@dataclass
class Metrics:
    average_weighted_quantile_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageWeightedQuantileLoss' }})
    error_metrics: Optional[List[errormetric.ErrorMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMetrics' }})
    rmse: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RMSE' }})
    weighted_quantile_losses: Optional[List[weightedquantileloss.WeightedQuantileLoss]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WeightedQuantileLosses' }})
    
