from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobexecutionsummaryforthing


@dataclass_json
@dataclass
class ListJobExecutionsForThingResponse:
    execution_summaries: Optional[List[jobexecutionsummaryforthing.JobExecutionSummaryForThing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
