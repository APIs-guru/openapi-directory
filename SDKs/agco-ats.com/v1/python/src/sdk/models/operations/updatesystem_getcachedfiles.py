from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSystemGetCachedFilesPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ClientID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSystemGetCachedFilesQueryParams:
    expired: bool = field(default=None, metadata={'query_param': { 'field_name': 'Expired', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSystemGetCachedFilesRequest:
    path_params: UpdateSystemGetCachedFilesPathParams = field(default=None)
    query_params: UpdateSystemGetCachedFilesQueryParams = field(default=None)
    

@dataclass
class UpdateSystemGetCachedFilesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_system_get_cached_files_200_application_json_strings: Optional[List[str]] = field(default=None)
    update_system_get_cached_files_200_text_json_strings: Optional[List[str]] = field(default=None)
    
