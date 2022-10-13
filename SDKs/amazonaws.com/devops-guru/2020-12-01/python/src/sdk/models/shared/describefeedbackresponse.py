from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import insightfeedback


@dataclass_json
@dataclass
class DescribeFeedbackResponse:
    insight_feedback: Optional[insightfeedback.InsightFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightFeedback' }})
    
