from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBuildBatchesInput:
    filter: Optional[BuildBatchFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_order: Optional[SortOrderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
