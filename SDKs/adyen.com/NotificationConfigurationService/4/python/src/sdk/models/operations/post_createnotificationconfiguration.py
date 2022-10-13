from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCreateNotificationConfigurationSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCreateNotificationConfigurationSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCreateNotificationConfigurationSecurity:
    option1: Optional[PostCreateNotificationConfigurationSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCreateNotificationConfigurationSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCreateNotificationConfigurationRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCreateNotificationConfigurationSecurity = field(default=None)
    

@dataclass
class PostCreateNotificationConfigurationResponse:
    content_type: str = field(default=None)
    get_notification_configuration_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
