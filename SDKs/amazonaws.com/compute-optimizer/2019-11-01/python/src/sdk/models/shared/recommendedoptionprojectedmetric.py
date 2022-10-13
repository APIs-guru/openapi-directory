from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectedmetric


@dataclass_json
@dataclass
class RecommendedOptionProjectedMetric:
    projected_metrics: Optional[List[projectedmetric.ProjectedMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectedMetrics' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    recommended_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendedInstanceType' }})
    
