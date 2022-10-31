from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TestEventPatternXAmzTargetEnum(str, Enum):
    AWS_EVENTS_TEST_EVENT_PATTERN = "AWSEvents.TestEventPattern"


@dataclass
class TestEventPatternHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: TestEventPatternXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestEventPatternRequest:
    headers: TestEventPatternHeaders = field(default=None)
    request: shared.TestEventPatternRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestEventPatternResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_event_pattern_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    test_event_pattern_response: Optional[shared.TestEventPatternResponse] = field(default=None)
    
