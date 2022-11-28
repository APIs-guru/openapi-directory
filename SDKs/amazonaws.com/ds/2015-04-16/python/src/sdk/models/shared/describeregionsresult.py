from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRegionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    regions_description: Optional[List[RegionDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionsDescription') }})
    
