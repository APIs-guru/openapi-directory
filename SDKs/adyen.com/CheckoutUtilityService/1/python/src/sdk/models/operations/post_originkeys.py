from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostOriginKeysRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOriginKeysResponse:
    content_type: str = field()
    status_code: int = field()
    checkout_utility_response: Optional[Any] = field(default=None)
    
