from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationRequestsUpdateTranslationRequestPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TranslationRequestsUpdateTranslationRequestQueryParams:
    do_resend_request: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'doResendRequest', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationRequestsUpdateTranslationRequestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    global_resources_shared_models_translation_request: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    global_resources_shared_models_translation_request1: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    global_resources_shared_models_translation_request2: Optional[shared.GlobalResourcesSharedModelsTranslationRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class TranslationRequestsUpdateTranslationRequestRequest:
    path_params: TranslationRequestsUpdateTranslationRequestPathParams = field()
    query_params: TranslationRequestsUpdateTranslationRequestQueryParams = field()
    request: TranslationRequestsUpdateTranslationRequestRequests = field()
    

@dataclass
class TranslationRequestsUpdateTranslationRequestResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
