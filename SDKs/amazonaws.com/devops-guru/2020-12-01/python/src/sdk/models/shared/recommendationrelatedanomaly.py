from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendationRelatedAnomaly:
    r"""RecommendationRelatedAnomaly
     Information about an anomaly that is related to a recommendation. 
    """
    
    resources: Optional[List[RecommendationRelatedAnomalyResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    source_details: Optional[List[RecommendationRelatedAnomalySourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDetails') }})
    
