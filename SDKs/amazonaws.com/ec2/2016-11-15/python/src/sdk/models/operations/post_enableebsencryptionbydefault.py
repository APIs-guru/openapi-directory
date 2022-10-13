from dataclasses import dataclass, field
from typing import Enum,Optional

class PostEnableEbsEncryptionByDefaultActionEnum(str, Enum):
    ENABLE_EBS_ENCRYPTION_BY_DEFAULT = "EnableEbsEncryptionByDefault"

class PostEnableEbsEncryptionByDefaultVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class PostEnableEbsEncryptionByDefaultQueryParams:
    action: PostEnableEbsEncryptionByDefaultActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostEnableEbsEncryptionByDefaultVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostEnableEbsEncryptionByDefaultHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class PostEnableEbsEncryptionByDefaultRequest:
    query_params: PostEnableEbsEncryptionByDefaultQueryParams = field(default=None)
    headers: PostEnableEbsEncryptionByDefaultHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostEnableEbsEncryptionByDefaultResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
