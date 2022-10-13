from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetTaxFormSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetTaxFormSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetTaxFormSecurity:
    option1: Optional[PostGetTaxFormSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetTaxFormSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetTaxFormRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetTaxFormSecurity = field(default=None)
    

@dataclass
class PostGetTaxFormResponse:
    content_type: str = field(default=None)
    get_tax_form_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
