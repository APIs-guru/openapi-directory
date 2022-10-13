from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterrule
from . import filterrule
from . import options
from . import taskschedule
from . import taglistentry


@dataclass_json
@dataclass
class CreateTaskRequest:
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogGroupArn' }})
    destination_location_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationLocationArn' }})
    excludes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Excludes' }})
    includes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Includes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    schedule: Optional[taskschedule.TaskSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    source_location_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceLocationArn' }})
    tags: Optional[List[taglistentry.TagListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
