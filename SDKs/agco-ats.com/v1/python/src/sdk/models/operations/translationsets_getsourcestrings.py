from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetSourceStringsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetSourceStringsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetSourceStringsRequest:
    path_params: TranslationSetsGetSourceStringsPathParams = field(default=None)
    query_params: TranslationSetsGetSourceStringsQueryParams = field(default=None)
    

@dataclass
class TranslationSetsGetSourceStringsResponse:
    api_i_paged_response_global_resources_shared_models_translation_set_source_string_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
