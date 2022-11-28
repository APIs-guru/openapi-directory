from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostTestNotificationConfigurationSecurity:
    api_key_auth: Optional[shared.SchemeAPIKeyAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostTestNotificationConfigurationRequest:
    security: PostTestNotificationConfigurationSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTestNotificationConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[Any] = field(default=None)
    test_notification_configuration_response: Optional[Any] = field(default=None)
    
