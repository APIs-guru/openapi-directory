from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MergeDeveloperIdentitiesInput:
    destination_user_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationUserIdentifier' }})
    developer_provider_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperProviderName' }})
    identity_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    source_user_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceUserIdentifier' }})
    
