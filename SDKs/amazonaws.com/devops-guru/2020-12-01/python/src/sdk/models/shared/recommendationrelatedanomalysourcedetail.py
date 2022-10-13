from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationrelatedcloudwatchmetricssourcedetail


@dataclass_json
@dataclass
class RecommendationRelatedAnomalySourceDetail:
    cloud_watch_metrics: Optional[List[recommendationrelatedcloudwatchmetricssourcedetail.RecommendationRelatedCloudWatchMetricsSourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchMetrics' }})
    
