from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationRelatedAnomalySourceDetail:
    r"""RecommendationRelatedAnomalySourceDetail
     Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric. 
    """
    
    cloud_watch_metrics: Optional[List[RecommendationRelatedCloudWatchMetricsSourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchMetrics') }})
    
