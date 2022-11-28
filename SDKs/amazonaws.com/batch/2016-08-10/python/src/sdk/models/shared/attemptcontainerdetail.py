from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttemptContainerDetail:
    r"""AttemptContainerDetail
    An object representing the details of a container that's part of a job attempt.
    """
    
    container_instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstanceArn') }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    log_stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamName') }})
    network_interfaces: Optional[List[NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    
