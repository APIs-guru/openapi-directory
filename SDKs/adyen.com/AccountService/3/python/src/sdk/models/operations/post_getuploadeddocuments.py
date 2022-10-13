from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetUploadedDocumentsSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetUploadedDocumentsSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetUploadedDocumentsSecurity:
    option1: Optional[PostGetUploadedDocumentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetUploadedDocumentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetUploadedDocumentsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetUploadedDocumentsSecurity = field(default=None)
    

@dataclass
class PostGetUploadedDocumentsResponse:
    content_type: str = field(default=None)
    get_uploaded_documents_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
