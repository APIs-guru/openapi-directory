from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reaction_enum


@dataclass_json
@dataclass
class RecommendationFeedbackSummary:
    reactions: Optional[List[reaction_enum.ReactionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reactions' }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
