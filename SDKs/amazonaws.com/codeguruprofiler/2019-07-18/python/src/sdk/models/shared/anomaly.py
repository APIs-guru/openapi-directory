from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import anomalyinstance
from . import metric


@dataclass_json
@dataclass
class Anomaly:
    instances: List[anomalyinstance.AnomalyInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    metric: metric.Metric = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
