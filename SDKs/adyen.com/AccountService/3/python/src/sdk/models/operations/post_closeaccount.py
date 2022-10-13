from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCloseAccountSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCloseAccountSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCloseAccountSecurity:
    option1: Optional[PostCloseAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCloseAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCloseAccountRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCloseAccountSecurity = field(default=None)
    

@dataclass
class PostCloseAccountResponse:
    close_account_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
