from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsGetTranslationRequestsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationRequestsGetTranslationRequestsRequest:
    query_params: TranslationRequestsGetTranslationRequestsQueryParams = field()
    

@dataclass
class TranslationRequestsGetTranslationRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_translation_request_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
