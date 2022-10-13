from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeForecastResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetGroupArn' }})
    estimated_time_remaining_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedTimeRemainingInMinutes' }})
    forecast_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastArn' }})
    forecast_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastName' }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastTypes' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    predictor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
