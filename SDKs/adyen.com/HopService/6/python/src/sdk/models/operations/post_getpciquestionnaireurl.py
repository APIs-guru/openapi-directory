from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetPciQuestionnaireURLSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetPciQuestionnaireURLSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetPciQuestionnaireURLSecurity:
    option1: Optional[PostGetPciQuestionnaireURLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetPciQuestionnaireURLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetPciQuestionnaireURLRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetPciQuestionnaireURLSecurity = field(default=None)
    

@dataclass
class PostGetPciQuestionnaireURLResponse:
    content_type: str = field(default=None)
    get_pci_url_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
