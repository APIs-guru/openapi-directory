from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPredictorBacktestExportJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    predictor_backtest_export_jobs: Optional[List[PredictorBacktestExportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobs') }})
    
