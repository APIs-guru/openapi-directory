from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ContainsPiiEntitiesXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_CONTAINS_PII_ENTITIES = "Comprehend_20171127.ContainsPiiEntities"


@dataclass
class ContainsPiiEntitiesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ContainsPiiEntitiesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ContainsPiiEntitiesRequest:
    headers: ContainsPiiEntitiesHeaders = field(default=None)
    request: shared.ContainsPiiEntitiesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ContainsPiiEntitiesResponse:
    contains_pii_entities_response: Optional[shared.ContainsPiiEntitiesResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    text_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    unsupported_language_exception: Optional[Any] = field(default=None)
    
