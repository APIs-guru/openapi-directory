from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingClientInfoQueryParams:
    client_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingClientInfoRequest:
    query_params: ReportingClientInfoQueryParams = field(default=None)
    

@dataclass
class ReportingClientInfoResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_client_info: Optional[shared.UpdateSystemModelsClientInfo] = field(default=None)
    
