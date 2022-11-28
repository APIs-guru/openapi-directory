from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaFunctionMemoryRecommendationOption:
    r"""LambdaFunctionMemoryRecommendationOption
    Describes a recommendation option for an Lambda function.
    """
    
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySize') }})
    projected_utilization_metrics: Optional[List[LambdaFunctionMemoryProjectedMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectedUtilizationMetrics') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
