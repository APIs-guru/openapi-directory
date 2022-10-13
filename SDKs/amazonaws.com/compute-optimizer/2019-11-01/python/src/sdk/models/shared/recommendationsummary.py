from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import recommendationsourcetype_enum
from . import summary


@dataclass_json
@dataclass
class RecommendationSummary:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    recommendation_resource_type: Optional[recommendationsourcetype_enum.RecommendationSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationResourceType' }})
    summaries: Optional[List[summary.Summary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaries' }})
    
