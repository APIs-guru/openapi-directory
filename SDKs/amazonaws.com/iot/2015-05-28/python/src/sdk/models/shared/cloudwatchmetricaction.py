from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudwatchMetricAction:
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    metric_namespace: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricNamespace' }})
    metric_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricTimestamp' }})
    metric_unit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricUnit' }})
    metric_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValue' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
