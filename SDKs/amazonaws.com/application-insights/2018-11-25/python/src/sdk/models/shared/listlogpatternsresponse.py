from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logpattern


@dataclass_json
@dataclass
class ListLogPatternsResponse:
    log_patterns: Optional[List[logpattern.LogPattern]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogPatterns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    
