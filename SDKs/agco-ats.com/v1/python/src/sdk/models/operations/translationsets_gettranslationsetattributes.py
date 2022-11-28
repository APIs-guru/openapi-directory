from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetTranslationSetAttributesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetTranslationSetAttributesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetTranslationSetAttributesRequest:
    path_params: TranslationSetsGetTranslationSetAttributesPathParams = field()
    query_params: TranslationSetsGetTranslationSetAttributesQueryParams = field()
    

@dataclass
class TranslationSetsGetTranslationSetAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_translation_set_attribute_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
