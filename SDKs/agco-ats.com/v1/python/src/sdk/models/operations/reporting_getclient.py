from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingGetClientQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingGetClientRequest:
    query_params: ReportingGetClientQueryParams = field(default=None)
    

@dataclass
class ReportingGetClientResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_models_client: Optional[shared.UpdateSystemModelsClient] = field(default=None)
    
