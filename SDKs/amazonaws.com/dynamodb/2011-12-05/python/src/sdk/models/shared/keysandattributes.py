from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeysAndAttributes:
    keys: List[Key] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    attributes_to_get: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToGet') }})
    consistent_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistentRead') }})
    
