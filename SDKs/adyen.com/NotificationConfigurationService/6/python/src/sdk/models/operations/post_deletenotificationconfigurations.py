from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDeleteNotificationConfigurationsSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostDeleteNotificationConfigurationsSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostDeleteNotificationConfigurationsSecurity:
    option1: Optional[PostDeleteNotificationConfigurationsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostDeleteNotificationConfigurationsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostDeleteNotificationConfigurationsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDeleteNotificationConfigurationsSecurity = field(default=None)
    

@dataclass
class PostDeleteNotificationConfigurationsResponse:
    content_type: str = field(default=None)
    generic_response: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
