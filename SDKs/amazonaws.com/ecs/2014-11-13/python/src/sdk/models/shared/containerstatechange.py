from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerStateChange:
    r"""ContainerStateChange
    An object representing a change in state for a container.
    """
    
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    network_bindings: Optional[List[NetworkBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkBindings') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    runtime_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
