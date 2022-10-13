from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2UpdateGroupsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2UpdateGroupsIDRequest:
    path_params: GetAPIV2UpdateGroupsIDPathParams = field(default=None)
    

@dataclass
class GetAPIV2UpdateGroupsIDResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_update_group: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None)
    
