from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostListRecurringDetailsRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostListRecurringDetailsResponse:
    content_type: str = field(default=None)
    recurring_details_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
