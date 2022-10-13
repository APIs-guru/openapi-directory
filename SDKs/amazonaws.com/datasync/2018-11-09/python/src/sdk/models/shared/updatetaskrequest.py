from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filterrule
from . import filterrule
from . import options
from . import taskschedule


@dataclass_json
@dataclass
class UpdateTaskRequest:
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogGroupArn' }})
    excludes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Excludes' }})
    includes: Optional[List[filterrule.FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Includes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    schedule: Optional[taskschedule.TaskSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    task_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskArn' }})
    
