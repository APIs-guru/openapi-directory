from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostTransfersSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTransfersRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostTransfersSecurity = field(default=None)
    

@dataclass
class PostTransfersResponse:
    content_type: str = field(default=None)
    rest_service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    transfer_old: Optional[Any] = field(default=None)
    
