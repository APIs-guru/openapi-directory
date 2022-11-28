from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class BundlesGetBundlesQueryParams:
    active: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Active', 'style': 'form', 'explode': True }})
    update_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UpdateGroupID', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class BundlesGetBundlesRequest:
    query_params: BundlesGetBundlesQueryParams = field()
    

@dataclass
class BundlesGetBundlesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_bundle_: Optional[shared.APIPagedResponseUpdateSystemModelsBundle] = field(default=None)
    
