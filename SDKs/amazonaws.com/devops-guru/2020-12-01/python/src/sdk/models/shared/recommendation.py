from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Recommendation:
    r"""Recommendation
     Recommendation information to help you remediate detected anomalous behavior that generated an insight. 
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    related_anomalies: Optional[List[RecommendationRelatedAnomaly]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedAnomalies') }})
    related_events: Optional[List[RecommendationRelatedEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedEvents') }})
    
