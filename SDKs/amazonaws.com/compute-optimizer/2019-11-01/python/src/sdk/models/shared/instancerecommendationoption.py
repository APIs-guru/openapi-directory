from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceRecommendationOption:
    r"""InstanceRecommendationOption
    Describes a recommendation option for an Amazon EC2 instance.
    """
    
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    performance_risk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceRisk') }})
    platform_differences: Optional[List[PlatformDifferenceEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformDifferences') }})
    projected_utilization_metrics: Optional[List[UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedUtilizationMetrics') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
