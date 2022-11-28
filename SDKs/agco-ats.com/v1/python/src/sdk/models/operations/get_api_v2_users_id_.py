from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2UsersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2UsersIDRequest:
    path_params: GetAPIV2UsersIDPathParams = field()
    

@dataclass
class GetAPIV2UsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_user: Optional[shared.APIModelsUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
