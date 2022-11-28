from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostDeleteNotificationConfigurationsSecurity:
    api_key_auth: Optional[shared.SchemeAPIKeyAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDeleteNotificationConfigurationsRequest:
    security: PostDeleteNotificationConfigurationsSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDeleteNotificationConfigurationsResponse:
    content_type: str = field()
    status_code: int = field()
    generic_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    
