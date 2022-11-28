from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportArchiveRequest:
    request: bytes = field(metadata={'request': { 'media_type': 'application/x-gzip' }})
    

@dataclass
class ImportArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    import_read: Optional[shared.ImportRead] = field(default=None)
    
