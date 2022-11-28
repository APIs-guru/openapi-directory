from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeInstancesOutput:
    r"""DescribeInstancesOutput
    Represents the returned data in response to a request operation.
    """
    
    instances: Optional[List[Instance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
