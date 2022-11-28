from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFleetEventsOutput:
    r"""DescribeFleetEventsOutput
    Represents the returned data in response to a request operation.
    """
    
    events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Events') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
