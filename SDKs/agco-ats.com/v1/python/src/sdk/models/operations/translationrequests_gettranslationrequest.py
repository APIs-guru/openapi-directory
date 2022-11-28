from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsGetTranslationRequestPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationRequestsGetTranslationRequestRequest:
    path_params: TranslationRequestsGetTranslationRequestPathParams = field()
    

@dataclass
class TranslationRequestsGetTranslationRequestResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    global_resources_shared_models_translation_request: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None)
    
