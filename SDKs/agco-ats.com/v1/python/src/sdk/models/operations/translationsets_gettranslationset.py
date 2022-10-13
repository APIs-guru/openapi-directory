from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationSetsGetTranslationSetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationSetsGetTranslationSetQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetTranslationSetRequest:
    path_params: TranslationSetsGetTranslationSetPathParams = field(default=None)
    query_params: TranslationSetsGetTranslationSetQueryParams = field(default=None)
    

@dataclass
class TranslationSetsGetTranslationSetResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    global_resources_shared_models_translation_set: Optional[shared.GlobalResourcesSharedModelsTranslationSet] = field(default=None)
    status_code: int = field(default=None)
    
