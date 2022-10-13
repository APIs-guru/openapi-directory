from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsPostLogQueryParams:
    message: str = field(default=None, metadata={'query_param': { 'field_name': 'Message', 'style': 'form', 'explode': True }})
    

@dataclass
class LogsPostLogRequest:
    query_params: LogsPostLogQueryParams = field(default=None)
    

@dataclass
class LogsPostLogResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    logs_post_log_200_application_json_string: Optional[str] = field(default=None)
    logs_post_log_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
