from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stack


@dataclass_json
@dataclass
class DescribeStacksResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stacks: Optional[List[stack.Stack]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stacks' }})
    
