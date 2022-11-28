from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeletePredictorBacktestExportJobRequest:
    predictor_backtest_export_job_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobArn') }})
    
