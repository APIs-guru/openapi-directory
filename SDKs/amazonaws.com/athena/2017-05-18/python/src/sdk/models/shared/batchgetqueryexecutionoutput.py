from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryexecution
from . import unprocessedqueryexecutionid


@dataclass_json
@dataclass
class BatchGetQueryExecutionOutput:
    query_executions: Optional[List[queryexecution.QueryExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryExecutions' }})
    unprocessed_query_execution_ids: Optional[List[unprocessedqueryexecutionid.UnprocessedQueryExecutionID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedQueryExecutionIds' }})
    
