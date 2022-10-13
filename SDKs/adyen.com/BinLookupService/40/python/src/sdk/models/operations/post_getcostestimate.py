from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetCostEstimateSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetCostEstimateSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetCostEstimateSecurity:
    option1: Optional[PostGetCostEstimateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetCostEstimateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetCostEstimateRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetCostEstimateSecurity = field(default=None)
    

@dataclass
class PostGetCostEstimateResponse:
    content_type: str = field(default=None)
    cost_estimate_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
