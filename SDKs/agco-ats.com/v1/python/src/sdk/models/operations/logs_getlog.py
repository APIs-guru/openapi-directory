from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsGetLogPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsGetLogRequest:
    path_params: LogsGetLogPathParams = field(default=None)
    

@dataclass
class LogsGetLogResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_models_log: Optional[shared.APIModelsLog] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
