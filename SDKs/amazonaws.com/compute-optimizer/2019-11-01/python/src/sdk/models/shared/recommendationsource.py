from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recommendationsourcetype_enum


@dataclass_json
@dataclass
class RecommendationSource:
    recommendation_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationSourceArn' }})
    recommendation_source_type: Optional[recommendationsourcetype_enum.RecommendationSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationSourceType' }})
    
