from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import behaviorcriteria
from . import metricdimension


@dataclass_json
@dataclass
class Behavior:
    criteria: Optional[behaviorcriteria.BehaviorCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteria' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    metric_dimension: Optional[metricdimension.MetricDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricDimension' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    suppress_alerts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressAlerts' }})
    
