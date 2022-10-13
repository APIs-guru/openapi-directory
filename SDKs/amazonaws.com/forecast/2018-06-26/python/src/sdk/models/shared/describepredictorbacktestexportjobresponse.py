from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datadestination


@dataclass_json
@dataclass
class DescribePredictorBacktestExportJobResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination: Optional[datadestination.DataDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    predictor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorArn' }})
    predictor_backtest_export_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorBacktestExportJobArn' }})
    predictor_backtest_export_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorBacktestExportJobName' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
