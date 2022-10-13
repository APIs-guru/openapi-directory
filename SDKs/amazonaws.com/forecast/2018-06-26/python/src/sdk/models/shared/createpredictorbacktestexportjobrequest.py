from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datadestination
from . import tag


@dataclass_json
@dataclass
class CreatePredictorBacktestExportJobRequest:
    destination: datadestination.DataDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    predictor_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorArn' }})
    predictor_backtest_export_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorBacktestExportJobName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
