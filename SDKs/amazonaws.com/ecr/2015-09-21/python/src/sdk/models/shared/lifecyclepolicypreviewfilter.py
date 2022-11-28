from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifecyclePolicyPreviewFilter:
    r"""LifecyclePolicyPreviewFilter
    The filter for the lifecycle policy preview.
    """
    
    tag_status: Optional[TagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagStatus') }})
    
