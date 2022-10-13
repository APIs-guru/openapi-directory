from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FleetMetricNameAndArn:
    metric_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricArn' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    
