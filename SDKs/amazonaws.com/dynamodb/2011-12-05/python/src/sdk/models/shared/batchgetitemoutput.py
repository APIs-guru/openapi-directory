from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetItemOutput:
    responses: Optional[dict[str, BatchResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    unprocessed_keys: Optional[dict[str, KeysAndAttributes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedKeys') }})
    
