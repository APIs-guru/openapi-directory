from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ClientsGetQueryParams:
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ClientsGetRequest:
    query_params: ClientsGetQueryParams = field()
    

@dataclass
class ClientsGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_client_: Optional[shared.APIPagedResponseUpdateSystemModelsClient] = field(default=None)
    
