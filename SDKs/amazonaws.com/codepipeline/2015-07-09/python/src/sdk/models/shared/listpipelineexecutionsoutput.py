from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelineexecutionsummary


@dataclass_json
@dataclass
class ListPipelineExecutionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    pipeline_execution_summaries: Optional[List[pipelineexecutionsummary.PipelineExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineExecutionSummaries' }})
    
