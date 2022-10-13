from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostUpdateAccountHolderStateSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostUpdateAccountHolderStateSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdateAccountHolderStateSecurity:
    option1: Optional[PostUpdateAccountHolderStateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostUpdateAccountHolderStateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostUpdateAccountHolderStateRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUpdateAccountHolderStateSecurity = field(default=None)
    

@dataclass
class PostUpdateAccountHolderStateResponse:
    content_type: str = field(default=None)
    get_account_holder_status_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
