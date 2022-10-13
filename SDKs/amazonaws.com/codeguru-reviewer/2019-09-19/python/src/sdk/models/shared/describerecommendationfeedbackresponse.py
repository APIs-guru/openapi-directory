from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recommendationfeedback


@dataclass_json
@dataclass
class DescribeRecommendationFeedbackResponse:
    recommendation_feedback: Optional[recommendationfeedback.RecommendationFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationFeedback' }})
    
