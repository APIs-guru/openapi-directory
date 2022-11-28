from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingGetClientQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingGetClientRequest:
    query_params: ReportingGetClientQueryParams = field()
    

@dataclass
class ReportingGetClientResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_client: Optional[shared.UpdateSystemModelsClient] = field(default=None)
    
