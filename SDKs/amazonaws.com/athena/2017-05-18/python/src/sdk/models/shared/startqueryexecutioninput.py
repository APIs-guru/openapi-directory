from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartQueryExecutionInput:
    query_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryString') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    query_execution_context: Optional[QueryExecutionContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QueryExecutionContext') }})
    result_configuration: Optional[ResultConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultConfiguration') }})
    work_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    
