from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListThingsResponse:
    r"""ListThingsResponse
    The output from the ListThings operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    things: Optional[List[ThingAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('things') }})
    
