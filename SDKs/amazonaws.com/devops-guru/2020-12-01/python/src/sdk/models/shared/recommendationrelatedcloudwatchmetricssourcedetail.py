from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RecommendationRelatedCloudWatchMetricsSourceDetail:
    r"""RecommendationRelatedCloudWatchMetricsSourceDetail
     Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights. 
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    
