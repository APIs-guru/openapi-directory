from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEventTopicsResult:
    r"""DescribeEventTopicsResult
    The result of a DescribeEventTopic request.
    """
    
    event_topics: Optional[List[EventTopic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTopics') }})
    
