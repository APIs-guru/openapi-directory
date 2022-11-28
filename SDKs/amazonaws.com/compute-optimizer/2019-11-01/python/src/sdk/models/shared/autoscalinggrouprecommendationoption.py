from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingGroupRecommendationOption:
    r"""AutoScalingGroupRecommendationOption
    Describes a recommendation option for an Auto Scaling group.
    """
    
    configuration: Optional[AutoScalingGroupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    performance_risk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceRisk') }})
    projected_utilization_metrics: Optional[List[UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedUtilizationMetrics') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
