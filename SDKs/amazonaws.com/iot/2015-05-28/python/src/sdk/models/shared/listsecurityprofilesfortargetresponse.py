from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSecurityProfilesForTargetResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    security_profile_target_mappings: Optional[List[SecurityProfileTargetMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileTargetMappings') }})
    
