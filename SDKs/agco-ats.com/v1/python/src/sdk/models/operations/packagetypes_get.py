from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypesGetQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageTypesGetRequest:
    query_params: PackageTypesGetQueryParams = field(default=None)
    

@dataclass
class PackageTypesGetResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_update_system_models_package_type_: Optional[shared.APIPagedResponseUpdateSystemModelsPackageType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
