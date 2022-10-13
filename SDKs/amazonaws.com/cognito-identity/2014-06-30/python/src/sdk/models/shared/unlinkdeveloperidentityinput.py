from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnlinkDeveloperIdentityInput:
    developer_provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperProviderName' }})
    developer_user_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperUserIdentifier' }})
    identity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    identity_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    
