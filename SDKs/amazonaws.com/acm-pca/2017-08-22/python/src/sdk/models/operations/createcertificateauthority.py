from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateCertificateAuthorityXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY = "ACMPrivateCA.CreateCertificateAuthority"


@dataclass
class CreateCertificateAuthorityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateCertificateAuthorityXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCertificateAuthorityRequest:
    headers: CreateCertificateAuthorityHeaders = field(default=None)
    request: shared.CreateCertificateAuthorityRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCertificateAuthorityResponse:
    content_type: str = field(default=None)
    create_certificate_authority_response: Optional[shared.CreateCertificateAuthorityResponse] = field(default=None)
    invalid_args_exception: Optional[Any] = field(default=None)
    invalid_policy_exception: Optional[Any] = field(default=None)
    invalid_tag_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
