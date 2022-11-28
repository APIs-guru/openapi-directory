from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceKey:
    r"""ResourceKey
    The details that identify a resource within Config, including the resource type and resource ID.
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_type: ResourceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
