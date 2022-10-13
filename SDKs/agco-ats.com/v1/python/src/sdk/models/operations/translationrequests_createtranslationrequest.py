from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsCreateTranslationRequestRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    global_resources_shared_models_translation_request: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_request1: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_request2: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class TranslationRequestsCreateTranslationRequestRequest:
    request: TranslationRequestsCreateTranslationRequestRequests = field(default=None)
    

@dataclass
class TranslationRequestsCreateTranslationRequestResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    translation_requests_create_translation_request_200_application_json_int32_integer: Optional[int] = field(default=None)
    translation_requests_create_translation_request_200_text_json_int32_integer: Optional[int] = field(default=None)
    
