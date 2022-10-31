from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DetectSentimentXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_DETECT_SENTIMENT = "Comprehend_20171127.DetectSentiment"


@dataclass
class DetectSentimentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DetectSentimentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DetectSentimentRequest:
    headers: DetectSentimentHeaders = field(default=None)
    request: shared.DetectSentimentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetectSentimentResponse:
    content_type: str = field(default=None)
    detect_sentiment_response: Optional[shared.DetectSentimentResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    unsupported_language_exception: Optional[Any] = field(default=None)
    
