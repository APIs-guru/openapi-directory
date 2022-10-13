from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMeSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMeRequest:
    security: GetMeSecurity = field(default=None)
    

@dataclass
class GetMeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    me: Optional[shared.Me] = field(default=None)
    
