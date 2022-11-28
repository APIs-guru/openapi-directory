from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PredictorBacktestExportJobSummary:
    r"""PredictorBacktestExportJobSummary
    Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed <code>PredictorBacktestExportJobArn</code>.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination: Optional[DataDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    predictor_backtest_export_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobArn') }})
    predictor_backtest_export_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorBacktestExportJobName') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
