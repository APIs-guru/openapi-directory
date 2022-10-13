from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricdimension


@dataclass_json
@dataclass
class MetricToRetain:
    metric: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    metric_dimension: Optional[metricdimension.MetricDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricDimension' }})
    
