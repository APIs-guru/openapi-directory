from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsGetTranslationRequestsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationRequestsGetTranslationRequestsRequest:
    query_params: TranslationRequestsGetTranslationRequestsQueryParams = field(default=None)
    

@dataclass
class TranslationRequestsGetTranslationRequestsResponse:
    api_i_paged_response_global_resources_shared_models_translation_request_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
