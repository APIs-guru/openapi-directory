from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostNotifyShopperSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostNotifyShopperSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostNotifyShopperSecurity:
    option1: Optional[PostNotifyShopperSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostNotifyShopperSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostNotifyShopperRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostNotifyShopperSecurity = field(default=None)
    

@dataclass
class PostNotifyShopperResponse:
    content_type: str = field(default=None)
    notify_shopper_result: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
