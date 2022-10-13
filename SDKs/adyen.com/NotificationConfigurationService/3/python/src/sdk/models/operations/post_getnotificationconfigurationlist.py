from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostGetNotificationConfigurationListSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostGetNotificationConfigurationListSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostGetNotificationConfigurationListSecurity:
    option1: Optional[PostGetNotificationConfigurationListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostGetNotificationConfigurationListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostGetNotificationConfigurationListRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostGetNotificationConfigurationListSecurity = field(default=None)
    

@dataclass
class PostGetNotificationConfigurationListResponse:
    content_type: str = field(default=None)
    get_notification_configuration_list_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
