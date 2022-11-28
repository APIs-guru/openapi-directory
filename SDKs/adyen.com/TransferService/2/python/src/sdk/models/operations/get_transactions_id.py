from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTransactionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionsIDSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = field()
    security: GetTransactionsIDSecurity = field()
    

@dataclass
class GetTransactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    rest_service_error: Optional[Any] = field(default=None)
    transaction: Optional[Any] = field(default=None)
    
