from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import platformdifference_enum
from . import utilizationmetric


@dataclass_json
@dataclass
class InstanceRecommendationOption:
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    performance_risk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceRisk' }})
    platform_differences: Optional[List[platformdifference_enum.PlatformDifferenceEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformDifferences' }})
    projected_utilization_metrics: Optional[List[utilizationmetric.UtilizationMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectedUtilizationMetrics' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    
