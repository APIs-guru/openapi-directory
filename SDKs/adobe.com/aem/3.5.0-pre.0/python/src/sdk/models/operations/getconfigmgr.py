from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConfigMgrResponse:
    content_type: str = field()
    status_code: int = field()
    get_config_mgr_200_text_xml_string: Optional[str] = field(default=None)
    
