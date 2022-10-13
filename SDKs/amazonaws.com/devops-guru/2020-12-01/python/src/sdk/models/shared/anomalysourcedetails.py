from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchmetricsdetail


@dataclass_json
@dataclass
class AnomalySourceDetails:
    cloud_watch_metrics: Optional[List[cloudwatchmetricsdetail.CloudWatchMetricsDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchMetrics' }})
    
