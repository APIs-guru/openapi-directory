from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSecurityConfigurationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    security_configurations: Optional[List[SecurityConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityConfigurations') }})
    
