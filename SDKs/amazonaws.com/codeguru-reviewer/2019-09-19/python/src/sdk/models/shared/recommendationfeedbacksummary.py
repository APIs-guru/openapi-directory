from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationFeedbackSummary:
    r"""RecommendationFeedbackSummary
     Information about recommendation feedback summaries. 
    """
    
    reactions: Optional[List[ReactionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reactions') }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationId') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    
