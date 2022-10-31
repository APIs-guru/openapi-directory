from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchDetectDominantLanguageXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_DOMINANT_LANGUAGE = "Comprehend_20171127.BatchDetectDominantLanguage"


@dataclass
class BatchDetectDominantLanguageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: BatchDetectDominantLanguageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchDetectDominantLanguageRequest:
    headers: BatchDetectDominantLanguageHeaders = field(default=None)
    request: shared.BatchDetectDominantLanguageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchDetectDominantLanguageResponse:
    batch_detect_dominant_language_response: Optional[shared.BatchDetectDominantLanguageResponse] = field(default=None)
    batch_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    
