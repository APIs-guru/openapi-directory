from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersGetCurrentUserResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_user: Optional[shared.APIModelsUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
