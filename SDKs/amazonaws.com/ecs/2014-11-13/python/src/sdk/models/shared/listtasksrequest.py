from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTasksRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    container_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstance') }})
    desired_status: Optional[DesiredStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredStatus') }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('family') }})
    launch_type: Optional[LaunchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    started_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedBy') }})
    
