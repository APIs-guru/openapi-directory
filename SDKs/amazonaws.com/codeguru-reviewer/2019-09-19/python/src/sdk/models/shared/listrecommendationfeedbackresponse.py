from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationfeedbacksummary


@dataclass_json
@dataclass
class ListRecommendationFeedbackResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    recommendation_feedback_summaries: Optional[List[recommendationfeedbacksummary.RecommendationFeedbackSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationFeedbackSummaries' }})
    
