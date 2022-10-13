from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportArchiveResponse:
    airbyte_archive: Optional[bytes] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
