from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryexecution


@dataclass_json
@dataclass
class GetQueryExecutionOutput:
    query_execution: Optional[queryexecution.QueryExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryExecution' }})
    
