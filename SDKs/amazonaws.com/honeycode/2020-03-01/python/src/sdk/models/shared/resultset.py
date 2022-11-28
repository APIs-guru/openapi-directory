from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultSet:
    r"""ResultSet
     ResultSet contains the results of the request for a single block or list defined on the screen. 
    """
    
    headers: List[ColumnMetadata] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    rows: List[ResultRow] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
