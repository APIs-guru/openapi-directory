from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListCertificatesQueryParams:
    max_items: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCertificatesXAmzTargetEnum(str, Enum):
    CERTIFICATE_MANAGER_LIST_CERTIFICATES = "CertificateManager.ListCertificates"


@dataclass
class ListCertificatesHeaders:
    x_amz_target: ListCertificatesXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCertificatesRequest:
    headers: ListCertificatesHeaders = field()
    query_params: ListCertificatesQueryParams = field()
    request: shared.ListCertificatesRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListCertificatesResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_args_exception: Optional[Any] = field(default=None)
    list_certificates_response: Optional[shared.ListCertificatesResponse] = field(default=None)
    
