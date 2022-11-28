from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableRow:
    r"""TableRow
    An object that contains attributes about a single row in a table
    """
    
    cells: List[Cell] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    row_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowId') }})
    
