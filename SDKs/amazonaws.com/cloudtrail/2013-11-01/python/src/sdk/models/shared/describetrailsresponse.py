from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTrailsResponse:
    r"""DescribeTrailsResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    trail_list: Optional[List[Trail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trailList') }})
    
