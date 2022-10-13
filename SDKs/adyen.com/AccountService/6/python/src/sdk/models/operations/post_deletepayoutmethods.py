from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDeletePayoutMethodsSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDeletePayoutMethodsSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostDeletePayoutMethodsSecurity:
    option1: Optional[PostDeletePayoutMethodsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostDeletePayoutMethodsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostDeletePayoutMethodsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDeletePayoutMethodsSecurity = field(default=None)
    

@dataclass
class PostDeletePayoutMethodsResponse:
    content_type: str = field(default=None)
    generic_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
