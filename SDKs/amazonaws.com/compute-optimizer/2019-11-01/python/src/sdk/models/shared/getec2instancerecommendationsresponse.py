from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import getrecommendationerror
from . import instancerecommendation


@dataclass_json
@dataclass
class GetEc2InstanceRecommendationsResponse:
    errors: Optional[List[getrecommendationerror.GetRecommendationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    instance_recommendations: Optional[List[instancerecommendation.InstanceRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceRecommendations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
