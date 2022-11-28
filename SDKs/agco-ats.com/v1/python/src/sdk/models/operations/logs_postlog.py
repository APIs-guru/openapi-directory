from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsPostLogQueryParams:
    message: str = field(metadata={'query_param': { 'field_name': 'Message', 'style': 'form', 'explode': True }})
    

@dataclass
class LogsPostLogRequest:
    query_params: LogsPostLogQueryParams = field()
    

@dataclass
class LogsPostLogResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    logs_post_log_200_application_json_string: Optional[str] = field(default=None)
    logs_post_log_200_application_xml_string: Optional[str] = field(default=None)
    logs_post_log_200_text_json_string: Optional[str] = field(default=None)
    logs_post_log_200_text_xml_string: Optional[str] = field(default=None)
    
