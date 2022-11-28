from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    airbyte_archive: Optional[bytes] = field(default=None)
    
