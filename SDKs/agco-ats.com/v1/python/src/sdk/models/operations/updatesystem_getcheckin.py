from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSystemGetCheckinQueryParams:
    client_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    preview: bool = field(default=None, metadata={'query_param': { 'field_name': 'Preview', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSystemGetCheckinRequest:
    query_params: UpdateSystemGetCheckinQueryParams = field(default=None)
    

@dataclass
class UpdateSystemGetCheckinResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_checkin_result: Optional[shared.UpdateSystemModelsCheckinResult] = field(default=None)
    
