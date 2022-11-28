from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetQueryExecutionOutput:
    query_executions: Optional[List[QueryExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutions') }})
    unprocessed_query_execution_ids: Optional[List[UnprocessedQueryExecutionID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedQueryExecutionIds') }})
    
