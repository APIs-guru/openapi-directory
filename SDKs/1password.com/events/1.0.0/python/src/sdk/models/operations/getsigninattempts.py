from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSignInAttemptsSecurity:
    jwtsa: shared.SchemeJwtsa = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSignInAttemptsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetSignInAttemptsSecurity = field(default=None)
    

@dataclass
class GetSignInAttemptsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_sign_in_attempts_200_application_json_any: Optional[Any] = field(default=None)
    
