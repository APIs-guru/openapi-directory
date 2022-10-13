from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import provideruseridentifiertype
from . import provideruseridentifiertype


@dataclass_json
@dataclass
class AdminLinkProviderForUserRequest:
    destination_user: provideruseridentifiertype.ProviderUserIdentifierType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationUser' }})
    source_user: provideruseridentifiertype.ProviderUserIdentifierType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUser' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
