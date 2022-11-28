from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSignInAttemptsSecurity:
    jwtsa: shared.SchemeJwtsa = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSignInAttemptsRequest:
    security: GetSignInAttemptsSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSignInAttemptsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_sign_in_attempts_200_application_json_any: Optional[Any] = field(default=None)
    
