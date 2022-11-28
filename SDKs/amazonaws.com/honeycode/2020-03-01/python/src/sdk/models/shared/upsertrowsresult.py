from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpsertRowsResult:
    r"""UpsertRowsResult
     An object that represents the result of a single upsert row request. 
    """
    
    row_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIds') }})
    upsert_action: UpsertActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upsertAction') }})
    
