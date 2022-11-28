from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDisableRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDisableResponse:
    content_type: str = field()
    status_code: int = field()
    disable_result: Optional[Any] = field(default=None)
    
