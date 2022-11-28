from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsCreateTranslationRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_translation_request: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_request1: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_request2: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TranslationRequestsCreateTranslationRequestRequest:
    request: TranslationRequestsCreateTranslationRequestRequests = field()
    

@dataclass
class TranslationRequestsCreateTranslationRequestResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    translation_requests_create_translation_request_200_application_json_int32_integer: Optional[int] = field(default=None)
    translation_requests_create_translation_request_200_text_json_int32_integer: Optional[int] = field(default=None)
    
