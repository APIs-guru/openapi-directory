from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PortMapping:
    r"""PortMapping
    <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you are using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <note> <p>You cannot expose the same container port for multiple protocols. An error will be returned if this is attempted</p> </note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p>
    """
    
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    host_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostPort') }})
    protocol: Optional[TransportProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    
