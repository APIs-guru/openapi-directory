from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListImagesFilter:
    r"""ListImagesFilter
    An object representing a filter on a <a>ListImages</a> operation.
    """
    
    tag_status: Optional[TagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagStatus') }})
    
