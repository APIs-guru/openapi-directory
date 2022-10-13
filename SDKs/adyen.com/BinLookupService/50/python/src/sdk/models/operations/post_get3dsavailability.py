from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGet3dsAvailabilitySecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGet3dsAvailabilitySecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGet3dsAvailabilitySecurity:
    option1: Optional[PostGet3dsAvailabilitySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGet3dsAvailabilitySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGet3dsAvailabilityRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGet3dsAvailabilitySecurity = field(default=None)
    

@dataclass
class PostGet3dsAvailabilityResponse:
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    three_ds_availability_response: Optional[Any] = field(default=None)
    
