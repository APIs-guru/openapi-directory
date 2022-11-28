from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSystemGetCheckinQueryParams:
    client_id: str = field(metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    preview: bool = field(metadata={'query_param': { 'field_name': 'Preview', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSystemGetCheckinRequest:
    query_params: UpdateSystemGetCheckinQueryParams = field()
    

@dataclass
class UpdateSystemGetCheckinResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_models_checkin_result: Optional[shared.UpdateSystemModelsCheckinResult] = field(default=None)
    
