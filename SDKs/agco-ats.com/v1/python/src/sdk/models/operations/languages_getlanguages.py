from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LanguagesGetLanguagesQueryParams:
    include_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeDeleted', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class LanguagesGetLanguagesRequest:
    query_params: LanguagesGetLanguagesQueryParams = field()
    

@dataclass
class LanguagesGetLanguagesResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_language_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsLanguage] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
