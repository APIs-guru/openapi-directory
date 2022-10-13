from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reaction_enum


@dataclass_json
@dataclass
class RecommendationFeedback:
    code_review_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeReviewArn' }})
    created_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reactions: Optional[List[reaction_enum.ReactionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reactions' }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecommendationId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
