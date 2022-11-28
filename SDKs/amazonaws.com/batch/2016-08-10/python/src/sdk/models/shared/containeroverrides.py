from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerOverrides:
    r"""ContainerOverrides
    The overrides that should be sent to a container.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[List[KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    resource_requirements: Optional[List[ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
