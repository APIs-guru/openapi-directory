from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAuthIntrospectSecurity:
    jwtsa: shared.SchemeJwtsa = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAuthIntrospectRequest:
    security: GetAuthIntrospectSecurity = field()
    

@dataclass
class GetAuthIntrospectResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    introspection: Optional[shared.Introspection] = field(default=None)
    
