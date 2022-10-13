from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NotificationsPostMailRequests:
    api_models_notification: Optional[shared.APIModelsNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_notification1: Optional[shared.APIModelsNotification] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_notification2: Optional[shared.APIModelsNotification] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class NotificationsPostMailRequest:
    request: NotificationsPostMailRequests = field(default=None)
    

@dataclass
class NotificationsPostMailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
