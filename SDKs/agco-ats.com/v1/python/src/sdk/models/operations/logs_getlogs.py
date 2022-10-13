from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsGetLogsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class LogsGetLogsRequest:
    query_params: LogsGetLogsQueryParams = field(default=None)
    

@dataclass
class LogsGetLogsResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_api_models_log_: Optional[shared.APIPagedResponseAPIModelsLog] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
