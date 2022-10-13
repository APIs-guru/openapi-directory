from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StepAdjustment:
    metric_interval_lower_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricIntervalLowerBound' }})
    metric_interval_upper_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricIntervalUpperBound' }})
    scaling_adjustment: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingAdjustment' }})
    
