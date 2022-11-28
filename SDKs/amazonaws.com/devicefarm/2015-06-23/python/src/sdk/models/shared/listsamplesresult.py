from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSamplesResult:
    r"""ListSamplesResult
    Represents the result of a list samples request.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    samples: Optional[List[Sample]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samples') }})
    
