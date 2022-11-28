from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateSigningCertificateActionEnum(str, Enum):
    UPDATE_SIGNING_CERTIFICATE = "UpdateSigningCertificate"

class GetUpdateSigningCertificateStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

class GetUpdateSigningCertificateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateSigningCertificateQueryParams:
    action: GetUpdateSigningCertificateActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    certificate_id: str = field(metadata={'query_param': { 'field_name': 'CertificateId', 'style': 'form', 'explode': True }})
    status: GetUpdateSigningCertificateStatusEnum = field(metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    version: GetUpdateSigningCertificateVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    user_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateSigningCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateSigningCertificateRequest:
    headers: GetUpdateSigningCertificateHeaders = field()
    query_params: GetUpdateSigningCertificateQueryParams = field()
    

@dataclass
class GetUpdateSigningCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
