from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetAemProductInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_aem_product_info_default_application_json_strings: Optional[List[str]] = field(default=None)
    
