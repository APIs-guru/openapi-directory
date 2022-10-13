from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRefundNotPaidOutTransfersSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRefundNotPaidOutTransfersSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRefundNotPaidOutTransfersSecurity:
    option1: Optional[PostRefundNotPaidOutTransfersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRefundNotPaidOutTransfersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRefundNotPaidOutTransfersRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRefundNotPaidOutTransfersSecurity = field(default=None)
    

@dataclass
class PostRefundNotPaidOutTransfersResponse:
    content_type: str = field(default=None)
    refund_not_paid_out_transfers_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
