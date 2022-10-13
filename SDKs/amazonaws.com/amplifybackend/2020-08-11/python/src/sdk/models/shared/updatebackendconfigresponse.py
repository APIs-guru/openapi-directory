from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loginauthconfigreqobj


@dataclass_json
@dataclass
class UpdateBackendConfigResponse:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    backend_manager_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackendManagerAppId' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    login_auth_config: Optional[loginauthconfigreqobj.LoginAuthConfigReqObj] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoginAuthConfig' }})
    
