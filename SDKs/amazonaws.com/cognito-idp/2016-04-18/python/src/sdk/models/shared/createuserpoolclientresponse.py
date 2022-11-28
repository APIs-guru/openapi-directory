from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserPoolClientResponse:
    r"""CreateUserPoolClientResponse
    Represents the response from the server to create a user pool client.
    """
    
    user_pool_client: Optional[UserPoolClientType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolClient') }})
    
