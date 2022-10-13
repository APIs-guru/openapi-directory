from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggroupconfiguration
from . import utilizationmetric


@dataclass_json
@dataclass
class AutoScalingGroupRecommendationOption:
    configuration: Optional[autoscalinggroupconfiguration.AutoScalingGroupConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    performance_risk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceRisk' }})
    projected_utilization_metrics: Optional[List[utilizationmetric.UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectedUtilizationMetrics' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    
