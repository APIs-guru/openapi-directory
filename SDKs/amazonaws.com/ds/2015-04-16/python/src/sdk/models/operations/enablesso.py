from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class EnableSsoXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_ENABLE_SSO = "DirectoryService_20150416.EnableSso"


@dataclass
class EnableSsoHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: EnableSsoXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class EnableSsoRequest:
    headers: EnableSsoHeaders = field(default=None)
    request: shared.EnableSsoRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnableSsoResponse:
    authentication_failed_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    enable_sso_result: Optional[dict[str, Any]] = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    insufficient_permissions_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
