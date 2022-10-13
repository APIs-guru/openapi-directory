from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostTestNotificationConfigurationSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostTestNotificationConfigurationSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTestNotificationConfigurationSecurity:
    option1: Optional[PostTestNotificationConfigurationSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostTestNotificationConfigurationSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostTestNotificationConfigurationRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostTestNotificationConfigurationSecurity = field(default=None)
    

@dataclass
class PostTestNotificationConfigurationResponse:
    content_type: str = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    test_notification_configuration_response: Optional[Any] = field(default=None)
    
