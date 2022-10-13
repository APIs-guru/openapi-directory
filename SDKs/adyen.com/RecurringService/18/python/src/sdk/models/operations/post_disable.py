from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostDisableRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDisableResponse:
    content_type: str = field(default=None)
    disable_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
