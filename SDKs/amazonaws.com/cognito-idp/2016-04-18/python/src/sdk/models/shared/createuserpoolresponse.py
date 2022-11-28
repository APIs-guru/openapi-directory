from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserPoolResponse:
    r"""CreateUserPoolResponse
    Represents the response from the server for the request to create a user pool.
    """
    
    user_pool: Optional[UserPoolType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPool') }})
    
