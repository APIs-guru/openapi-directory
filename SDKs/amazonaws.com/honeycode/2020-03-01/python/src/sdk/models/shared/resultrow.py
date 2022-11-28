from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultRow:
    r"""ResultRow
    A single row in the ResultSet.
    """
    
    data_items: List[DataItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItems') }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowId') }})
    
