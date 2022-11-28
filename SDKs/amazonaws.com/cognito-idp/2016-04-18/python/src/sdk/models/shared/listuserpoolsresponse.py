from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUserPoolsResponse:
    r"""ListUserPoolsResponse
    Represents the response to list user pools.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_pools: Optional[List[UserPoolDescriptionType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPools') }})
    
