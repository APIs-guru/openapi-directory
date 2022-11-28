from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTruststoreResponse:
    content_type: str = field()
    status_code: int = field()
    get_truststore_default_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
