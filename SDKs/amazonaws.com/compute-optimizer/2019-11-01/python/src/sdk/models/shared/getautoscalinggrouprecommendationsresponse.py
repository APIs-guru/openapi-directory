from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggrouprecommendation
from . import getrecommendationerror


@dataclass_json
@dataclass
class GetAutoScalingGroupRecommendationsResponse:
    auto_scaling_group_recommendations: Optional[List[autoscalinggrouprecommendation.AutoScalingGroupRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroupRecommendations' }})
    errors: Optional[List[getrecommendationerror.GetRecommendationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
