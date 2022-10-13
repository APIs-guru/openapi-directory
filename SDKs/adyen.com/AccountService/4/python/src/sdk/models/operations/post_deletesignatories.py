from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDeleteSignatoriesSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDeleteSignatoriesSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostDeleteSignatoriesSecurity:
    option1: Optional[PostDeleteSignatoriesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostDeleteSignatoriesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostDeleteSignatoriesRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDeleteSignatoriesSecurity = field(default=None)
    

@dataclass
class PostDeleteSignatoriesResponse:
    content_type: str = field(default=None)
    generic_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
