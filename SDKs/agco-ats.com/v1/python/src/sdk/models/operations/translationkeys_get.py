from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TranslationKeysGetQueryParams:
    key_names: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyNames', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class TranslationKeysGetRequest:
    query_params: TranslationKeysGetQueryParams = field(default=None)
    

@dataclass
class TranslationKeysGetResponse:
    api_i_paged_response_oas_support_shared_models_translation_key_: Optional[shared.APIIPagedResponseOasSupportSharedModelsTranslationKey] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
