from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostAccountHolderTransactionListSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAccountHolderTransactionListSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAccountHolderTransactionListSecurity:
    option1: Optional[PostAccountHolderTransactionListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostAccountHolderTransactionListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostAccountHolderTransactionListRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAccountHolderTransactionListSecurity = field(default=None)
    

@dataclass
class PostAccountHolderTransactionListResponse:
    account_holder_transaction_list_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
