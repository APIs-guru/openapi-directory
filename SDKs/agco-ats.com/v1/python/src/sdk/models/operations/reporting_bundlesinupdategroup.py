from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ReportingBundlesInUpdateGroupQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'ID', 'style': 'form', 'explode': True }})
    include_inactive: bool = field(metadata={'query_param': { 'field_name': 'IncludeInactive', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportingBundlesInUpdateGroupRequest:
    query_params: ReportingBundlesInUpdateGroupQueryParams = field()
    

@dataclass
class ReportingBundlesInUpdateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_bundle_: Optional[shared.APIPagedResponseUpdateSystemModelsBundle] = field(default=None)
    
