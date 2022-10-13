from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import identitydescription


@dataclass_json
@dataclass
class ListIdentitiesResponse:
    identities: Optional[List[identitydescription.IdentityDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identities' }})
    identity_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
