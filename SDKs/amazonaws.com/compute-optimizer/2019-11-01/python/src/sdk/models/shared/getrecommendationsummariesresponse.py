from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationsummary


@dataclass_json
@dataclass
class GetRecommendationSummariesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    recommendation_summaries: Optional[List[recommendationsummary.RecommendationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationSummaries' }})
    
