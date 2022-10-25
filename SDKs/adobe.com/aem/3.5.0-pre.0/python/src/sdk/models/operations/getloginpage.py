from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetLoginPageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_login_page_default_text_html_string: Optional[str] = field(default=None)
    
