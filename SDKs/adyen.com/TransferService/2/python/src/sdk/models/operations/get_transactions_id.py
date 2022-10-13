from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTransactionsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = field(default=None)
    security: GetTransactionsIDSecurity = field(default=None)
    

@dataclass
class GetTransactionsIDResponse:
    content_type: str = field(default=None)
    rest_service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    transaction: Optional[Any] = field(default=None)
    
