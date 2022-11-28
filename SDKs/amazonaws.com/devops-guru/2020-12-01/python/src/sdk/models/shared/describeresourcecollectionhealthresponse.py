from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeResourceCollectionHealthResponse:
    cloud_formation: List[CloudFormationHealth] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudFormation') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    service: Optional[List[ServiceHealth]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Service') }})
    
