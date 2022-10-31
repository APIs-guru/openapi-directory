from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CheckSchemaVersionValidityXAmzTargetEnum(str, Enum):
    AWS_GLUE_CHECK_SCHEMA_VERSION_VALIDITY = "AWSGlue.CheckSchemaVersionValidity"


@dataclass
class CheckSchemaVersionValidityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CheckSchemaVersionValidityXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckSchemaVersionValidityRequest:
    headers: CheckSchemaVersionValidityHeaders = field(default=None)
    request: shared.CheckSchemaVersionValidityInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckSchemaVersionValidityResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    check_schema_version_validity_response: Optional[shared.CheckSchemaVersionValidityResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
