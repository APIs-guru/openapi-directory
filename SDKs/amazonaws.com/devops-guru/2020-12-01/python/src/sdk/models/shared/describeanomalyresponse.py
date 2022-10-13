from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import proactiveanomaly
from . import reactiveanomaly


@dataclass_json
@dataclass
class DescribeAnomalyResponse:
    proactive_anomaly: Optional[proactiveanomaly.ProactiveAnomaly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProactiveAnomaly' }})
    reactive_anomaly: Optional[reactiveanomaly.ReactiveAnomaly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReactiveAnomaly' }})
    
