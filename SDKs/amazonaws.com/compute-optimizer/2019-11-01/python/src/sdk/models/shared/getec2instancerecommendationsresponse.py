from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetEc2InstanceRecommendationsResponse:
    errors: Optional[List[GetRecommendationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    instance_recommendations: Optional[List[InstanceRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceRecommendations') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
