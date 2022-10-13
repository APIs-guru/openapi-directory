from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userpoolclientdescription


@dataclass_json
@dataclass
class ListUserPoolClientsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    user_pool_clients: Optional[List[userpoolclientdescription.UserPoolClientDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolClients' }})
    
