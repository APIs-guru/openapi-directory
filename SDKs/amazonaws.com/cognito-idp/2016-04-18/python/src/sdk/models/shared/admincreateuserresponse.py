from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdminCreateUserResponse:
    r"""AdminCreateUserResponse
    Represents the response from the server to the request to create the user.
    """
    
    user: Optional[UserType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('User') }})
    
