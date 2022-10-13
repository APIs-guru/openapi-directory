from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostListRecurringDetailsSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostListRecurringDetailsSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostListRecurringDetailsSecurity:
    option1: Optional[PostListRecurringDetailsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostListRecurringDetailsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostListRecurringDetailsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostListRecurringDetailsSecurity = field(default=None)
    

@dataclass
class PostListRecurringDetailsResponse:
    content_type: str = field(default=None)
    recurring_details_result: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
