from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateLocationS3XAmzTargetEnum(str, Enum):
    FMRS_SERVICE_CREATE_LOCATION_S3 = "FmrsService.CreateLocationS3"


@dataclass
class CreateLocationS3Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateLocationS3XAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateLocationS3Request:
    headers: CreateLocationS3Headers = field(default=None)
    request: shared.CreateLocationS3Request = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateLocationS3Response:
    content_type: str = field(default=None)
    create_location_s3_response: Optional[shared.CreateLocationS3Response] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
