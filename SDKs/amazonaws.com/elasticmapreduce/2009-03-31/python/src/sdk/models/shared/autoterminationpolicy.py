from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoTerminationPolicy:
    r"""AutoTerminationPolicy
    An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href=\"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html\">Control cluster termination</a>.
    """
    
    idle_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleTimeout') }})
    
