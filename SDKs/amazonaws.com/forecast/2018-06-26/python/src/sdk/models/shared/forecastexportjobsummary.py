from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datadestination


@dataclass_json
@dataclass
class ForecastExportJobSummary:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    destination: Optional[datadestination.DataDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    forecast_export_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastExportJobArn' }})
    forecast_export_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastExportJobName' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
