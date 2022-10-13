from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LookupDeveloperIdentityResponse:
    developer_user_identifier_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeveloperUserIdentifierList' }})
    identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
