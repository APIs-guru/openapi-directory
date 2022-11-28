from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class PriorityPackagesGetPriorityPackagesStatusEnum(str, Enum):
    ACTIVE = "Active"
    COMPLETED = "Completed"
    ALL = "All"


@dataclass
class PriorityPackagesGetPriorityPackagesQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ClientID', 'style': 'form', 'explode': True }})
    status: Optional[PriorityPackagesGetPriorityPackagesStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class PriorityPackagesGetPriorityPackagesRequest:
    query_params: PriorityPackagesGetPriorityPackagesQueryParams = field()
    

@dataclass
class PriorityPackagesGetPriorityPackagesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_priority_package_: Optional[shared.APIPagedResponseUpdateSystemModelsPriorityPackage] = field(default=None)
    
