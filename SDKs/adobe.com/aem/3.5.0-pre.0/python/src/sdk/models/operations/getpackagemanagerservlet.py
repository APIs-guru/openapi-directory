from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPackageManagerServletResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_package_manager_servlet_404_text_html_string: Optional[str] = field(default=None)
    get_package_manager_servlet_405_text_html_string: Optional[str] = field(default=None)
    
