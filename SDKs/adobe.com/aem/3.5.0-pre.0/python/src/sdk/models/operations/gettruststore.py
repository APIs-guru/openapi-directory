from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTruststoreResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_truststore_default_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
