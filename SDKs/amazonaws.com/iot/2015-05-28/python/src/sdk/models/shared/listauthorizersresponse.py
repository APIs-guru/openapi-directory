from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAuthorizersResponse:
    authorizers: Optional[List[AuthorizerSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizers') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextMarker') }})
    
