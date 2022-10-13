from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionexecutionfilter


@dataclass_json
@dataclass
class ListActionExecutionsInput:
    filter: Optional[actionexecutionfilter.ActionExecutionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineName' }})
    
