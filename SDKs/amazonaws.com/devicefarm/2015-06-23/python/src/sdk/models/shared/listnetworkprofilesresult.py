from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNetworkProfilesResult:
    network_profiles: Optional[List[NetworkProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfiles') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
