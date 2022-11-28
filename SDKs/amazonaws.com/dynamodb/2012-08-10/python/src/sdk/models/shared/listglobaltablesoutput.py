from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGlobalTablesOutput:
    global_tables: Optional[List[GlobalTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTables') }})
    last_evaluated_global_table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedGlobalTableName') }})
    
