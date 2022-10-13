from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportArchiveRequest:
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-gzip' }})
    

@dataclass
class ImportArchiveResponse:
    content_type: str = field(default=None)
    import_read: Optional[shared.ImportRead] = field(default=None)
    status_code: int = field(default=None)
    
