from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchmetricsdimension
from . import cloudwatchmetricsstat_enum


@dataclass_json
@dataclass
class CloudWatchMetricsDetail:
    dimensions: Optional[List[cloudwatchmetricsdimension.CloudWatchMetricsDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Namespace' }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Period' }})
    stat: Optional[cloudwatchmetricsstat_enum.CloudWatchMetricsStatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stat' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
