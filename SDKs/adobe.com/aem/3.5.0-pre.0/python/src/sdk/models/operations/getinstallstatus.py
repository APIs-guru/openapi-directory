from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInstallStatusResponse:
    content_type: str = field(default=None)
    install_status: Optional[shared.InstallStatus] = field(default=None)
    status_code: int = field(default=None)
    get_install_status_default_application_json_string: Optional[str] = field(default=None)
    
