from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetTranslationSetStringsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetTranslationSetStringsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetTranslationSetStringsRequest:
    path_params: TranslationSetsGetTranslationSetStringsPathParams = field()
    query_params: TranslationSetsGetTranslationSetStringsQueryParams = field()
    

@dataclass
class TranslationSetsGetTranslationSetStringsResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_translation_set_string_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
