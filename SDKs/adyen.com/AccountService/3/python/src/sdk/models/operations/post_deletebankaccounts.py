from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDeleteBankAccountsSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDeleteBankAccountsSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostDeleteBankAccountsSecurity:
    option1: Optional[PostDeleteBankAccountsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostDeleteBankAccountsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostDeleteBankAccountsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDeleteBankAccountsSecurity = field(default=None)
    

@dataclass
class PostDeleteBankAccountsResponse:
    content_type: str = field(default=None)
    generic_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
