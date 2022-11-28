from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryExecution:
    r"""QueryExecution
    Information about a single instance of a query execution.
    """
    
    engine_version: Optional[EngineVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersion') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Query') }})
    query_execution_context: Optional[QueryExecutionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutionContext') }})
    query_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutionId') }})
    result_configuration: Optional[ResultConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfiguration') }})
    statement_type: Optional[StatementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatementType') }})
    statistics: Optional[QueryExecutionStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistics') }})
    status: Optional[QueryExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
