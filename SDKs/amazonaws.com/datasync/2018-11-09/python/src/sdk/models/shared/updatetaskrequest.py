from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTaskRequest:
    r"""UpdateTaskRequest
    UpdateTaskResponse
    """
    
    task_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskArn') }})
    cloud_watch_log_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLogGroupArn') }})
    excludes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    includes: Optional[List[FilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    schedule: Optional[TaskSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    
