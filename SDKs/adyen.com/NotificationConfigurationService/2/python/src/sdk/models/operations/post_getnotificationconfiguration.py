from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetNotificationConfigurationSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetNotificationConfigurationSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetNotificationConfigurationSecurity:
    option1: Optional[PostGetNotificationConfigurationSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetNotificationConfigurationSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetNotificationConfigurationRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetNotificationConfigurationSecurity = field(default=None)
    

@dataclass
class PostGetNotificationConfigurationResponse:
    content_type: str = field(default=None)
    get_notification_configuration_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
