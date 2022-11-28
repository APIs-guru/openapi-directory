from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostTransfersSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTransfersRequest:
    security: PostTransfersSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTransfersResponse:
    content_type: str = field()
    status_code: int = field()
    rest_service_error: Optional[Any] = field(default=None)
    transfer: Optional[Any] = field(default=None)
    
