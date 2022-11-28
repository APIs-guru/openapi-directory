from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class TranslationSetsGetTranslationSetsStateEnum(str, Enum):
    OUT_FOR_PROCESSING = "OutForProcessing"
    PROCESSING = "Processing"
    PENDING_APPROVAL = "PendingApproval"
    OUT_FOR_TRANSLATION = "OutForTranslation"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass
class TranslationSetsGetTranslationSetsQueryParams:
    include_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includeAttributes', 'style': 'form', 'explode': True }})
    language_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'languageId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    state: Optional[TranslationSetsGetTranslationSetsStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    string_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'stringId', 'style': 'form', 'explode': True }})
    translation_request_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'translationRequestID', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationSetsGetTranslationSetsRequest:
    query_params: TranslationSetsGetTranslationSetsQueryParams = field()
    

@dataclass
class TranslationSetsGetTranslationSetsResponse:
    content_type: str = field()
    status_code: int = field()
    api_i_paged_response_global_resources_shared_models_translation_set_: Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSet] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
