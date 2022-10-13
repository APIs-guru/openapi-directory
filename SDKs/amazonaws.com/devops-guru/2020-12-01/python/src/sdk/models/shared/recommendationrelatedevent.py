from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationrelatedeventresource


@dataclass_json
@dataclass
class RecommendationRelatedEvent:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    resources: Optional[List[recommendationrelatedeventresource.RecommendationRelatedEventResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    
