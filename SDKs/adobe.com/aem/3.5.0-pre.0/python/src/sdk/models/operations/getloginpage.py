from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetLoginPageResponse:
    content_type: str = field()
    status_code: int = field()
    get_login_page_default_text_html_string: Optional[str] = field(default=None)
    
