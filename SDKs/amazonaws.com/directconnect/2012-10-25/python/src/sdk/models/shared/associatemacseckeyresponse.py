from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateMacSecKeyResponse:
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    mac_sec_keys: Optional[List[MacSecKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macSecKeys') }})
    
