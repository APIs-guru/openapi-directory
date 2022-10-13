from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePredictorBacktestExportJobRequest:
    predictor_backtest_export_job_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorBacktestExportJobArn' }})
    
