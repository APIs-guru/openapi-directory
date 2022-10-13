from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import engineversion
from . import queryexecutioncontext
from . import resultconfiguration
from . import statementtype_enum
from . import queryexecutionstatistics
from . import queryexecutionstatus


@dataclass_json
@dataclass
class QueryExecution:
    engine_version: Optional[engineversion.EngineVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineVersion' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Query' }})
    query_execution_context: Optional[queryexecutioncontext.QueryExecutionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryExecutionContext' }})
    query_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryExecutionId' }})
    result_configuration: Optional[resultconfiguration.ResultConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultConfiguration' }})
    statement_type: Optional[statementtype_enum.StatementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatementType' }})
    statistics: Optional[queryexecutionstatistics.QueryExecutionStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statistics' }})
    status: Optional[queryexecutionstatus.QueryExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
