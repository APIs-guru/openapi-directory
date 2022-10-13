from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filter
from . import recommendationpreferences


@dataclass_json
@dataclass
class GetEc2InstanceRecommendationsRequest:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIds' }})
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    instance_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceArns' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    recommendation_preferences: Optional[recommendationpreferences.RecommendationPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationPreferences' }})
    
