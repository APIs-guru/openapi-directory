from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAuthorizationTokenResponse:
    authorization_data: Optional[AuthorizationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationData') }})
    
