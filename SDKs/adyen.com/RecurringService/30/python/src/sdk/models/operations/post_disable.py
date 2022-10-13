from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDisableSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDisableSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostDisableSecurity:
    option1: Optional[PostDisableSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostDisableSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostDisableRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDisableSecurity = field(default=None)
    

@dataclass
class PostDisableResponse:
    content_type: str = field(default=None)
    disable_result: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
