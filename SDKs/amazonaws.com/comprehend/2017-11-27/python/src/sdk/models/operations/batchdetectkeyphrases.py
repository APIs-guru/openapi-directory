from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class BatchDetectKeyPhrasesXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_KEY_PHRASES = "Comprehend_20171127.BatchDetectKeyPhrases"


@dataclass
class BatchDetectKeyPhrasesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: BatchDetectKeyPhrasesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class BatchDetectKeyPhrasesRequest:
    headers: BatchDetectKeyPhrasesHeaders = field(default=None)
    request: shared.BatchDetectKeyPhrasesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchDetectKeyPhrasesResponse:
    batch_detect_key_phrases_response: Optional[shared.BatchDetectKeyPhrasesResponse] = field(default=None)
    batch_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    unsupported_language_exception: Optional[Any] = field(default=None)
    
