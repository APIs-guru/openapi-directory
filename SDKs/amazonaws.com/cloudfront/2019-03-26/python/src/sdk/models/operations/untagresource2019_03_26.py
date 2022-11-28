from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class UntagResource20190326OperationEnum(str, Enum):
    UNTAG = "Untag"


@dataclass
class UntagResource20190326QueryParams:
    operation: UntagResource20190326OperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    resource: str = field(metadata={'query_param': { 'field_name': 'Resource', 'style': 'form', 'explode': True }})
    

@dataclass
class UntagResource20190326Headers:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResource20190326Request:
    headers: UntagResource20190326Headers = field()
    query_params: UntagResource20190326QueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UntagResource20190326Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
