from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPayoutAccountHolderSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostPayoutAccountHolderSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostPayoutAccountHolderSecurity:
    option1: Optional[PostPayoutAccountHolderSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostPayoutAccountHolderSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostPayoutAccountHolderRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostPayoutAccountHolderSecurity = field(default=None)
    

@dataclass
class PostPayoutAccountHolderResponse:
    content_type: str = field(default=None)
    payout_account_holder_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
