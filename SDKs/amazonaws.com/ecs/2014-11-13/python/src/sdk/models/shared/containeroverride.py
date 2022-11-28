from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerOverride:
    r"""ContainerOverride
    The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{\"containerOverrides\": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    cpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    environment: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environment_files: Optional[List[EnvironmentFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentFiles') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    memory_reservation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReservation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_requirements: Optional[List[ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    
