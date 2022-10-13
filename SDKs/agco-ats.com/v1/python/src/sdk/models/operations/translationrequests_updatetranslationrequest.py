from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsUpdateTranslationRequestPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationRequestsUpdateTranslationRequestQueryParams:
    do_resend_request: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'doResendRequest', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationRequestsUpdateTranslationRequestRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_translation_request: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_request1: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_request2: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TranslationRequestsUpdateTranslationRequestRequest:
    path_params: TranslationRequestsUpdateTranslationRequestPathParams = field(default=None)
    query_params: TranslationRequestsUpdateTranslationRequestQueryParams = field(default=None)
    request: TranslationRequestsUpdateTranslationRequestRequests = field(default=None)
    

@dataclass
class TranslationRequestsUpdateTranslationRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
