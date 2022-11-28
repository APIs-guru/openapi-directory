from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceConfiguration:
    r"""ResourceConfiguration
    The configuration of the resource used to execute the <code>containerAction</code>.
    """
    
    compute_type: ComputeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeType') }})
    volume_size_in_gb: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeSizeInGB') }})
    
