from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAccountHolderBalanceSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAccountHolderBalanceSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAccountHolderBalanceSecurity:
    option1: Optional[PostAccountHolderBalanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostAccountHolderBalanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostAccountHolderBalanceRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAccountHolderBalanceSecurity = field(default=None)
    

@dataclass
class PostAccountHolderBalanceResponse:
    account_holder_balance_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
