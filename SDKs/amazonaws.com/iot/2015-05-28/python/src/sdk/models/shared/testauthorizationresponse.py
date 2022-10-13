from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authresult


@dataclass_json
@dataclass
class TestAuthorizationResponse:
    auth_results: Optional[List[authresult.AuthResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authResults' }})
    
