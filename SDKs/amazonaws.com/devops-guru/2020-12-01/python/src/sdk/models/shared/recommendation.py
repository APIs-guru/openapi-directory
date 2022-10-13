from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationrelatedanomaly
from . import recommendationrelatedevent


@dataclass_json
@dataclass
class Recommendation:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Link' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    related_anomalies: Optional[List[recommendationrelatedanomaly.RecommendationRelatedAnomaly]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedAnomalies' }})
    related_events: Optional[List[recommendationrelatedevent.RecommendationRelatedEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedEvents' }})
    
