from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HealthCheckPolicy:
    r"""HealthCheckPolicy
    An object representing the health check policy for a virtual node's listener.
    """
    
    healthy_threshold: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyThreshold') }})
    interval_millis: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalMillis') }})
    protocol: PortProtocolEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    timeout_millis: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutMillis') }})
    unhealthy_threshold: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyThreshold') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
