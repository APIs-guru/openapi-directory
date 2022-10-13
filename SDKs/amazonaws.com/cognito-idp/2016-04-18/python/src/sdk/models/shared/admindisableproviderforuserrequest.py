from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import provideruseridentifiertype


@dataclass_json
@dataclass
class AdminDisableProviderForUserRequest:
    user: provideruseridentifiertype.ProviderUserIdentifierType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'User' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
