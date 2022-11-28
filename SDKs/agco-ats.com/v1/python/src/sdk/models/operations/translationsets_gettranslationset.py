from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetTranslationSetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetTranslationSetQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetTranslationSetRequest:
    path_params: TranslationSetsGetTranslationSetPathParams = field()
    query_params: TranslationSetsGetTranslationSetQueryParams = field()
    

@dataclass
class TranslationSetsGetTranslationSetResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_translation_set: Optional[shared.GlobalResourcesSharedModelsTranslationSet] = field(default=None)
    
