from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCloseAccountHolderSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCloseAccountHolderSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCloseAccountHolderSecurity:
    option1: Optional[PostCloseAccountHolderSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCloseAccountHolderSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCloseAccountHolderRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCloseAccountHolderSecurity = field(default=None)
    

@dataclass
class PostCloseAccountHolderResponse:
    close_account_holder_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
