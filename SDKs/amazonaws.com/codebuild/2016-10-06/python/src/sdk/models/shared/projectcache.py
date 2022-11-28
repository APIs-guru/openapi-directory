from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProjectCache:
    r"""ProjectCache
    Information about the cache for the build project.
    """
    
    type: CacheTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    modes: Optional[List[CacheModeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modes') }})
    
