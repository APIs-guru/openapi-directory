from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessLog:
    r"""AccessLog
    Information about the <code>AccessLog</code> attribute.
    """
    
    enabled: bool = field()
    emit_interval: Optional[int] = field(default=None)
    s3_bucket_name: Optional[str] = field(default=None)
    s3_bucket_prefix: Optional[str] = field(default=None)
    
