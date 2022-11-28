from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsGetLogPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsGetLogRequest:
    path_params: LogsGetLogPathParams = field()
    

@dataclass
class LogsGetLogResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_models_log: Optional[shared.APIModelsLog] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
