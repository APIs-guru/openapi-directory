from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostCreateTestCardRangesSecurity:
    api_key_auth: Optional[shared.SchemeAPIKeyAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCreateTestCardRangesRequest:
    security: PostCreateTestCardRangesSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCreateTestCardRangesResponse:
    content_type: str = field()
    status_code: int = field()
    create_test_card_ranges_result: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    
