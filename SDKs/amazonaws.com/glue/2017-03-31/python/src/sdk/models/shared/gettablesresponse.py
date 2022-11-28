from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetTablesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    table_list: Optional[List[Table]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableList') }})
    
