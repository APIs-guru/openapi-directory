from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminDisableProviderForUserRequest:
    user: ProviderUserIdentifierType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
