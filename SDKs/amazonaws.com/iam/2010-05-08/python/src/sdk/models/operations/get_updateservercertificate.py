from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateServerCertificateActionEnum(str, Enum):
    UPDATE_SERVER_CERTIFICATE = "UpdateServerCertificate"

class GetUpdateServerCertificateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateServerCertificateQueryParams:
    action: GetUpdateServerCertificateActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    server_certificate_name: str = field(metadata={'query_param': { 'field_name': 'ServerCertificateName', 'style': 'form', 'explode': True }})
    version: GetUpdateServerCertificateVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    new_path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewPath', 'style': 'form', 'explode': True }})
    new_server_certificate_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NewServerCertificateName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateServerCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateServerCertificateRequest:
    headers: GetUpdateServerCertificateHeaders = field()
    query_params: GetUpdateServerCertificateQueryParams = field()
    

@dataclass
class GetUpdateServerCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
