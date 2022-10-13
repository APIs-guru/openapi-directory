from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import getrecommendationerror
from . import volumerecommendation


@dataclass_json
@dataclass
class GetEbsVolumeRecommendationsResponse:
    errors: Optional[List[getrecommendationerror.GetRecommendationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    volume_recommendations: Optional[List[volumerecommendation.VolumeRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeRecommendations' }})
    
