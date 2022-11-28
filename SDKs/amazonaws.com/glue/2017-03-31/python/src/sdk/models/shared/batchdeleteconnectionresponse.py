from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeleteConnectionResponse:
    errors: Optional[dict[str, ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    succeeded: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Succeeded') }})
    
