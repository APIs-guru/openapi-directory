from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendation


@dataclass_json
@dataclass
class ListRecommendationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    recommendations: Optional[List[recommendation.Recommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recommendations' }})
    
