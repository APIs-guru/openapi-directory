from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateServerCertificateActionEnum(str, Enum):
    UPDATE_SERVER_CERTIFICATE = "UpdateServerCertificate"

class GetUpdateServerCertificateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateServerCertificateQueryParams:
    action: GetUpdateServerCertificateActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    new_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewPath', 'style': 'form', 'explode': True }})
    new_server_certificate_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewServerCertificateName', 'style': 'form', 'explode': True }})
    server_certificate_name: str = field(default=None, metadata={'query_param': { 'field_name': 'ServerCertificateName', 'style': 'form', 'explode': True }})
    version: GetUpdateServerCertificateVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateServerCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetUpdateServerCertificateRequest:
    query_params: GetUpdateServerCertificateQueryParams = field(default=None)
    headers: GetUpdateServerCertificateHeaders = field(default=None)
    

@dataclass
class GetUpdateServerCertificateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
