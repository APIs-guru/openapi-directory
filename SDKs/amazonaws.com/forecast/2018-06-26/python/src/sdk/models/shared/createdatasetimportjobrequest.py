from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDatasetImportJobRequest:
    data_source: DataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    dataset_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArn') }})
    dataset_import_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetImportJobName') }})
    geolocation_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeolocationFormat') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeZone') }})
    timestamp_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampFormat') }})
    use_geolocation_for_time_zone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UseGeolocationForTimeZone') }})
    
