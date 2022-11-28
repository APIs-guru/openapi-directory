from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListComponentVersionsResponse:
    component_versions: Optional[List[ComponentVersionListItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersions') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
