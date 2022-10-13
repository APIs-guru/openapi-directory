from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import queryexecutioncontext
from . import resultconfiguration


@dataclass_json
@dataclass
class StartQueryExecutionInput:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    query_execution_context: Optional[queryexecutioncontext.QueryExecutionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryExecutionContext' }})
    query_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QueryString' }})
    result_configuration: Optional[resultconfiguration.ResultConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultConfiguration' }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
