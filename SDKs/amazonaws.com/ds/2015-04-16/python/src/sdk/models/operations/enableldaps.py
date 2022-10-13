from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class EnableLdapsxAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_ENABLE_LDAPS = "DirectoryService_20150416.EnableLDAPS"


@dataclass
class EnableLdapsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: EnableLdapsxAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class EnableLdapsRequest:
    headers: EnableLdapsHeaders = field(default=None)
    request: shared.EnableLdapsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnableLdapsResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_does_not_exist_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    enable_ldaps_result: Optional[dict[str, Any]] = field(default=None)
    invalid_ldaps_status_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    no_available_certificate_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
