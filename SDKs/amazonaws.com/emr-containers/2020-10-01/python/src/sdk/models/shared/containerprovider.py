from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerProvider:
    r"""ContainerProvider
    The information about the container provider.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: ContainerProviderTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    info: Optional[ContainerInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    
