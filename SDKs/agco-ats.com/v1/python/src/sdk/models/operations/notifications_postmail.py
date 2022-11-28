from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class NotificationsPostMailRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_notification: Optional[shared.APIModelsNotification] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_notification1: Optional[shared.APIModelsNotification] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_notification2: Optional[shared.APIModelsNotification] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class NotificationsPostMailRequest:
    request: NotificationsPostMailRequests = field()
    

@dataclass
class NotificationsPostMailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
