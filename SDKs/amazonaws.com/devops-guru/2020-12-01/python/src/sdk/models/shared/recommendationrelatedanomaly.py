from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recommendationrelatedanomalyresource
from . import recommendationrelatedanomalysourcedetail


@dataclass_json
@dataclass
class RecommendationRelatedAnomaly:
    resources: Optional[List[recommendationrelatedanomalyresource.RecommendationRelatedAnomalyResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    source_details: Optional[List[recommendationrelatedanomalysourcedetail.RecommendationRelatedAnomalySourceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDetails' }})
    
