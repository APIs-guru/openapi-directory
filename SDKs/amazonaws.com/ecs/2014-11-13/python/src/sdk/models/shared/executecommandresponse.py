from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecuteCommandResponse:
    cluster_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterArn') }})
    container_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerArn') }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    interactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactive') }})
    session: Optional[Session] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    
