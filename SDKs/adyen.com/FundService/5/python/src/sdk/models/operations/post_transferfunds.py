from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostTransferFundsSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostTransferFundsSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTransferFundsSecurity:
    option1: Optional[PostTransferFundsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostTransferFundsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostTransferFundsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostTransferFundsSecurity = field(default=None)
    

@dataclass
class PostTransferFundsResponse:
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    transfer_funds_response: Optional[Any] = field(default=None)
    
