from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionrecommendationfilter


@dataclass_json
@dataclass
class GetLambdaFunctionRecommendationsRequest:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountIds' }})
    filters: Optional[List[lambdafunctionrecommendationfilter.LambdaFunctionRecommendationFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    function_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionArns' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
