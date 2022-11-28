from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetIntegrationsResponse:
    items: Optional[List[Integration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
