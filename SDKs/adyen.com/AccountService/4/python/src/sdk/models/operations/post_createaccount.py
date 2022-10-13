from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCreateAccountSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCreateAccountSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCreateAccountSecurity:
    option1: Optional[PostCreateAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCreateAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCreateAccountRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCreateAccountSecurity = field(default=None)
    

@dataclass
class PostCreateAccountResponse:
    content_type: str = field(default=None)
    create_account_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
