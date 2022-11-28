from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SystemResourceLimits:
    r"""SystemResourceLimits
    Contains information about system resource limits that the IoT Greengrass Core software applies to a component's processes. For more information, see <a href=\"https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-greengrass-core-v2.html#configure-component-system-resource-limits\">Configure system resource limits for components</a>.
    """
    
    cpus: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpus') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    
