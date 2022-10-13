from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostUploadDocumentSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostUploadDocumentSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUploadDocumentSecurity:
    option1: Optional[PostUploadDocumentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostUploadDocumentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostUploadDocumentRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUploadDocumentSecurity = field(default=None)
    

@dataclass
class PostUploadDocumentResponse:
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_account_holder_response: Optional[Any] = field(default=None)
    
