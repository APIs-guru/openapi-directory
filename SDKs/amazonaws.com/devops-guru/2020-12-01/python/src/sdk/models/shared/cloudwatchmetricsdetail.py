from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchMetricsDetail:
    r"""CloudWatchMetricsDetail
     Information about an Amazon CloudWatch metric. 
    """
    
    dimensions: Optional[List[CloudWatchMetricsDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    stat: Optional[CloudWatchMetricsStatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stat') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
