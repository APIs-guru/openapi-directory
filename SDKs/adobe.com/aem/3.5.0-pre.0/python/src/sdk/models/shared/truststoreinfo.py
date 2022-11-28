from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TruststoreInfo:
    aliases: Optional[List[TruststoreItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exists') }})
    
