from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAppsResult:
    r"""ListAppsResult
     The result structure for an Amplify app list request. 
    """
    
    apps: List[App] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
