from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import predictorbacktestexportjobsummary


@dataclass_json
@dataclass
class ListPredictorBacktestExportJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    predictor_backtest_export_jobs: Optional[List[predictorbacktestexportjobsummary.PredictorBacktestExportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorBacktestExportJobs' }})
    
