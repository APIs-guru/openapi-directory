from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetIdentityProviderByIdentifierRequest:
    idp_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpIdentifier' }})
    user_pool_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
