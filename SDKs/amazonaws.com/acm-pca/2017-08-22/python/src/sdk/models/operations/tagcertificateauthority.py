from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TagCertificateAuthorityXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_TAG_CERTIFICATE_AUTHORITY = "ACMPrivateCA.TagCertificateAuthority"


@dataclass
class TagCertificateAuthorityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: TagCertificateAuthorityXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class TagCertificateAuthorityRequest:
    headers: TagCertificateAuthorityHeaders = field(default=None)
    request: shared.TagCertificateAuthorityRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TagCertificateAuthorityResponse:
    content_type: str = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_state_exception: Optional[Any] = field(default=None)
    invalid_tag_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
