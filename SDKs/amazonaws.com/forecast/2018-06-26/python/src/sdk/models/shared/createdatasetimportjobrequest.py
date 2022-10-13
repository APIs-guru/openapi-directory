from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasource
from . import tag


@dataclass_json
@dataclass
class CreateDatasetImportJobRequest:
    data_source: datasource.DataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    dataset_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_import_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetImportJobName' }})
    geolocation_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeolocationFormat' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeZone' }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimestampFormat' }})
    use_geolocation_for_time_zone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UseGeolocationForTimeZone' }})
    
