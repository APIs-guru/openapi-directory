from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTruststoreInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    truststore_info: Optional[shared.TruststoreInfo] = field(default=None)
    get_truststore_info_default_application_json_string: Optional[str] = field(default=None)
    
