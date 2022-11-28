from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCrxdeStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_crxde_status_200_plain_text_string: Optional[str] = field(default=None)
    get_crxde_status_404_plain_text_string: Optional[str] = field(default=None)
    
