from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostCreateTestCardRangesSecurityOption1:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostCreateTestCardRangesSecurityOption2:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCreateTestCardRangesSecurity:
    option1: Optional[PostCreateTestCardRangesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCreateTestCardRangesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCreateTestCardRangesRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCreateTestCardRangesSecurity = field(default=None)
    

@dataclass
class PostCreateTestCardRangesResponse:
    content_type: str = field(default=None)
    create_test_card_ranges_result: Optional[Any] = field(default=None)
    service_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
