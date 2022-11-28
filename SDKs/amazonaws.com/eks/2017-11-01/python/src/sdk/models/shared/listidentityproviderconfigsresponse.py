from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListIdentityProviderConfigsResponse:
    identity_provider_configs: Optional[List[IdentityProviderConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityProviderConfigs') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
