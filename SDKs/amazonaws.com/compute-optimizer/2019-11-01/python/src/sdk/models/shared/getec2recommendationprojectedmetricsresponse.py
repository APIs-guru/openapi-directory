from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendedoptionprojectedmetric


@dataclass_json
@dataclass
class GetEc2RecommendationProjectedMetricsResponse:
    recommended_option_projected_metrics: Optional[List[recommendedoptionprojectedmetric.RecommendedOptionProjectedMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendedOptionProjectedMetrics' }})
    
