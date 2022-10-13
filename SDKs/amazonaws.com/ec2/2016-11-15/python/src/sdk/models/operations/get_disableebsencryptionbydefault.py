from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDisableEbsEncryptionByDefaultActionEnum(str, Enum):
    DISABLE_EBS_ENCRYPTION_BY_DEFAULT = "DisableEbsEncryptionByDefault"

class GetDisableEbsEncryptionByDefaultVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDisableEbsEncryptionByDefaultQueryParams:
    action: GetDisableEbsEncryptionByDefaultActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetDisableEbsEncryptionByDefaultVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDisableEbsEncryptionByDefaultHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDisableEbsEncryptionByDefaultRequest:
    query_params: GetDisableEbsEncryptionByDefaultQueryParams = field(default=None)
    headers: GetDisableEbsEncryptionByDefaultHeaders = field(default=None)
    

@dataclass
class GetDisableEbsEncryptionByDefaultResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
