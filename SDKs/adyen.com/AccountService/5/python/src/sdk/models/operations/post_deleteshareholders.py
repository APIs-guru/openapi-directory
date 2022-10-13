from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDeleteShareholdersSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDeleteShareholdersSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostDeleteShareholdersSecurity:
    option1: Optional[PostDeleteShareholdersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostDeleteShareholdersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostDeleteShareholdersRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDeleteShareholdersSecurity = field(default=None)
    

@dataclass
class PostDeleteShareholdersResponse:
    content_type: str = field(default=None)
    generic_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
