from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userpoolclienttype


@dataclass_json
@dataclass
class UpdateUserPoolClientResponse:
    user_pool_client: Optional[userpoolclienttype.UserPoolClientType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolClient' }})
    
