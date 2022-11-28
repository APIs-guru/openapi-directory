from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StringTranslationsGetTranslationsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    modified_after_timestamp: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modifiedAfterTimestamp', 'style': 'form', 'explode': True }})
    

@dataclass
class StringTranslationsGetTranslationsRequest:
    query_params: StringTranslationsGetTranslationsQueryParams = field()
    

@dataclass
class StringTranslationsGetTranslationsResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_string_translation_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsStringTranslation] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
