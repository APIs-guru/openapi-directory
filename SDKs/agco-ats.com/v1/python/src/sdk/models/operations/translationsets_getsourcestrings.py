from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetSourceStringsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetSourceStringsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetSourceStringsRequest:
    path_params: TranslationSetsGetSourceStringsPathParams = field()
    query_params: TranslationSetsGetSourceStringsQueryParams = field()
    

@dataclass
class TranslationSetsGetSourceStringsResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_translation_set_source_string_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
