from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnomalySourceDetails:
    r"""AnomalySourceDetails
     Details about the source of the anomalous operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics. 
    """
    
    cloud_watch_metrics: Optional[List[CloudWatchMetricsDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchMetrics') }})
    
