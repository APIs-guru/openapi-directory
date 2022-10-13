from dataclasses import dataclass, field
from typing import Enum,Optional

class GetVerifyDomainDkimActionEnum(str, Enum):
    VERIFY_DOMAIN_DKIM = "VerifyDomainDkim"

class GetVerifyDomainDkimVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetVerifyDomainDkimQueryParams:
    action: GetVerifyDomainDkimActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain: str = field(default=None, metadata={'query_param': { 'field_name': 'Domain', 'style': 'form', 'explode': True }})
    version: GetVerifyDomainDkimVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVerifyDomainDkimHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetVerifyDomainDkimRequest:
    query_params: GetVerifyDomainDkimQueryParams = field(default=None)
    headers: GetVerifyDomainDkimHeaders = field(default=None)
    

@dataclass
class GetVerifyDomainDkimResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
