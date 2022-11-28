from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTaskRequest:
    r"""CreateTaskRequest
    CreateTaskRequest
    """
    
    destination_location_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationLocationArn') }})
    source_location_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceLocationArn') }})
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupArn') }})
    excludes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    includes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    schedule: Optional[TaskSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    tags: Optional[List[TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
