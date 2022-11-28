from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceRequirement:
    r"""ResourceRequirement
    The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
    """
    
    type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
