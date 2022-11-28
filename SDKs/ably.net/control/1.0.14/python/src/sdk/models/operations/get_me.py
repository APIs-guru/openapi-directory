from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMeSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMeRequest:
    security: GetMeSecurity = field()
    

@dataclass
class GetMeResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    me: Optional[shared.Me] = field(default=None)
    
