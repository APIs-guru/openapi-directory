from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUserPoolClientsResponse:
    r"""ListUserPoolClientsResponse
    Represents the response from the server that lists user pool clients.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_pool_clients: Optional[List[UserPoolClientDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolClients') }})
    
