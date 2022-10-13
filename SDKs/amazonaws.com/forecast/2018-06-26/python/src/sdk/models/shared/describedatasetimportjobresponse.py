from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasource
from . import statistics


@dataclass_json
@dataclass
class DescribeDatasetImportJobResponse:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSize' }})
    data_source: Optional[datasource.DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_import_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetImportJobArn' }})
    dataset_import_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetImportJobName' }})
    estimated_time_remaining_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedTimeRemainingInMinutes' }})
    field_statistics: Optional[dict[str, statistics.Statistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FieldStatistics' }})
    geolocation_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeolocationFormat' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeZone' }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampFormat' }})
    use_geolocation_for_time_zone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseGeolocationForTimeZone' }})
    
