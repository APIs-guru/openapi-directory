from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import insightfeedbackoption_enum


@dataclass_json
@dataclass
class InsightFeedback:
    feedback: Optional[insightfeedbackoption_enum.InsightFeedbackOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Feedback' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    
