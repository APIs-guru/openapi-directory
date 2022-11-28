from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class UpdateSystemGetCachedFilesPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'ClientID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSystemGetCachedFilesQueryParams:
    expired: bool = field(metadata={'query_param': { 'field_name': 'Expired', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateSystemGetCachedFilesRequest:
    path_params: UpdateSystemGetCachedFilesPathParams = field()
    query_params: UpdateSystemGetCachedFilesQueryParams = field()
    

@dataclass
class UpdateSystemGetCachedFilesResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    update_system_get_cached_files_200_application_json_strings: Optional[List[str]] = field(default=None)
    update_system_get_cached_files_200_text_json_strings: Optional[List[str]] = field(default=None)
    
