from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionmemoryprojectedmetric


@dataclass_json
@dataclass
class LambdaFunctionMemoryRecommendationOption:
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memorySize' }})
    projected_utilization_metrics: Optional[List[lambdafunctionmemoryprojectedmetric.LambdaFunctionMemoryProjectedMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectedUtilizationMetrics' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    
