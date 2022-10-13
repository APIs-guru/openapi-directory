from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListLogPatternSetsResponse:
    log_pattern_sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPatternSets' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    
