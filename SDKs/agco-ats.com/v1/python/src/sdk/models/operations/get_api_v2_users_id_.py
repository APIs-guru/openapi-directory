from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2UsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2UsersIDRequest:
    path_params: GetAPIV2UsersIDPathParams = field(default=None)
    

@dataclass
class GetAPIV2UsersIDResponse:
    api_models_user: Optional[shared.APIModelsUser] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
