from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostUpdateAccountHolderSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostUpdateAccountHolderSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdateAccountHolderSecurity:
    option1: Optional[PostUpdateAccountHolderSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostUpdateAccountHolderSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostUpdateAccountHolderRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUpdateAccountHolderSecurity = field(default=None)
    

@dataclass
class PostUpdateAccountHolderResponse:
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_account_holder_response: Optional[Any] = field(default=None)
    
