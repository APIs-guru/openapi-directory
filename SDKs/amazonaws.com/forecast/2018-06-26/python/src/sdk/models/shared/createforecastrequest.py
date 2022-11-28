from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateForecastRequest:
    forecast_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastName') }})
    predictor_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorArn') }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastTypes') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
