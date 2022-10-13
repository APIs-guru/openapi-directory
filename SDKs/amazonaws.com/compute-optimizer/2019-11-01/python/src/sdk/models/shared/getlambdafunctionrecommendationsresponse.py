from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionrecommendation


@dataclass_json
@dataclass
class GetLambdaFunctionRecommendationsResponse:
    lambda_function_recommendations: Optional[List[lambdafunctionrecommendation.LambdaFunctionRecommendation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaFunctionRecommendations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
