from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostListSigningCertificatesActionEnum(str, Enum):
    LIST_SIGNING_CERTIFICATES = "ListSigningCertificates"

class PostListSigningCertificatesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class PostListSigningCertificatesQueryParams:
    action: PostListSigningCertificatesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostListSigningCertificatesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclass
class PostListSigningCertificatesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostListSigningCertificatesRequest:
    headers: PostListSigningCertificatesHeaders = field()
    query_params: PostListSigningCertificatesQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostListSigningCertificatesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
