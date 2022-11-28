from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListComponentsResponse:
    application_component_list: Optional[List[ApplicationComponent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationComponentList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
