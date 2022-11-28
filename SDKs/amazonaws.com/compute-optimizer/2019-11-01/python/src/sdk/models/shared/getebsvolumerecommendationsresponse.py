from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetEbsVolumeRecommendationsResponse:
    errors: Optional[List[GetRecommendationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    volume_recommendations: Optional[List[VolumeRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeRecommendations') }})
    
