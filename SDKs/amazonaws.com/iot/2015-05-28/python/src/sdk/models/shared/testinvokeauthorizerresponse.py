from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestInvokeAuthorizerResponse:
    disconnect_after_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disconnectAfterInSeconds' }})
    is_authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAuthenticated' }})
    policy_documents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDocuments' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalId' }})
    refresh_after_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshAfterInSeconds' }})
    
