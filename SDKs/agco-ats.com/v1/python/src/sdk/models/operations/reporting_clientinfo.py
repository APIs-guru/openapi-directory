from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingClientInfoQueryParams:
    client_id: str = field(metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingClientInfoRequest:
    query_params: ReportingClientInfoQueryParams = field()
    

@dataclass
class ReportingClientInfoResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_client_info: Optional[shared.UpdateSystemModelsClientInfo] = field(default=None)
    
