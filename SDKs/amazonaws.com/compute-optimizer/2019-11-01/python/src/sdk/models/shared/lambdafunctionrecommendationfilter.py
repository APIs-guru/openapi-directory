from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lambdafunctionrecommendationfiltername_enum


@dataclass_json
@dataclass
class LambdaFunctionRecommendationFilter:
    name: Optional[lambdafunctionrecommendationfiltername_enum.LambdaFunctionRecommendationFilterNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
