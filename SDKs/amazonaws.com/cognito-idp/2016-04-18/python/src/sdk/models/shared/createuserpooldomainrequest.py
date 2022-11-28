from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserPoolDomainRequest:
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    custom_domain_config: Optional[CustomDomainConfigType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomainConfig') }})
    
