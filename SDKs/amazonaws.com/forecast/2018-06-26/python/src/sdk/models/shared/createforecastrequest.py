from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateForecastRequest:
    forecast_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastName' }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastTypes' }})
    predictor_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
