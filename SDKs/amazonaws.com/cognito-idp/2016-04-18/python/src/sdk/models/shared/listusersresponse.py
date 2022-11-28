from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUsersResponse:
    r"""ListUsersResponse
    The response from the request to list users.
    """
    
    pagination_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    users: Optional[List[UserType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    
