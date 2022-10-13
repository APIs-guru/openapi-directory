from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCreateAccountHolderSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCreateAccountHolderSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCreateAccountHolderSecurity:
    option1: Optional[PostCreateAccountHolderSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCreateAccountHolderSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCreateAccountHolderRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCreateAccountHolderSecurity = field(default=None)
    

@dataclass
class PostCreateAccountHolderResponse:
    content_type: str = field(default=None)
    create_account_holder_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
