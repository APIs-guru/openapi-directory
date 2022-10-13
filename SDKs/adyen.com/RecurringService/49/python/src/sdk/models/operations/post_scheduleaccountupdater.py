from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostScheduleAccountUpdaterSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostScheduleAccountUpdaterSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostScheduleAccountUpdaterSecurity:
    option1: Optional[PostScheduleAccountUpdaterSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostScheduleAccountUpdaterSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostScheduleAccountUpdaterRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostScheduleAccountUpdaterSecurity = field(default=None)
    

@dataclass
class PostScheduleAccountUpdaterResponse:
    content_type: str = field(default=None)
    schedule_account_updater_result: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
