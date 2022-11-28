from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostPayoutAccountHolderSecurity:
    api_key_auth: Optional[shared.SchemeAPIKeyAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostPayoutAccountHolderRequest:
    security: PostPayoutAccountHolderSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPayoutAccountHolderResponse:
    content_type: str = field()
    status_code: int = field()
    payout_account_holder_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    
