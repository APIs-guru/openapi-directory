from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLQueryDatasetAction:
    r"""SQLQueryDatasetAction
    The SQL query to modify the message.
    """
    
    sql_query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlQuery') }})
    filters: Optional[List[QueryFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    
