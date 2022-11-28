from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePredictorBacktestExportJobRequest:
    destination: DataDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    predictor_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorArn') }})
    predictor_backtest_export_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
