from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import predictorsummary


@dataclass_json
@dataclass
class ListPredictorsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    predictors: Optional[List[predictorsummary.PredictorSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predictors' }})
    
