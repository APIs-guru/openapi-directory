from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelinesummary


@dataclass_json
@dataclass
class ListPipelinesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pipelines: Optional[List[pipelinesummary.PipelineSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelines' }})
    
