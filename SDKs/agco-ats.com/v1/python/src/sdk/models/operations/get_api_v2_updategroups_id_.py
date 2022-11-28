from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2UpdateGroupsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2UpdateGroupsIDRequest:
    path_params: GetAPIV2UpdateGroupsIDPathParams = field()
    

@dataclass
class GetAPIV2UpdateGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_update_group: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None)
    
