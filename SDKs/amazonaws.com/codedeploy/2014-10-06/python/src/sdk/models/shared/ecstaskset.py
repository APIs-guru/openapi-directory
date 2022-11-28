from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EcsTaskSet:
    r"""EcsTaskSet
     Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. 
    """
    
    desired_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCount') }})
    identifer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifer') }})
    pending_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingCount') }})
    running_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runningCount') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_group: Optional[TargetGroupInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetGroup') }})
    task_set_label: Optional[TargetLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSetLabel') }})
    traffic_weight: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficWeight') }})
    
