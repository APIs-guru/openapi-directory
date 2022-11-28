from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteIndexFieldActionEnum(str, Enum):
    DELETE_INDEX_FIELD = "DeleteIndexField"

class GetDeleteIndexFieldVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_02_01 = "2011-02-01"


@dataclass
class GetDeleteIndexFieldQueryParams:
    action: GetDeleteIndexFieldActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    index_field_name: str = field(metadata={'query_param': { 'field_name': 'IndexFieldName', 'style': 'form', 'explode': True }})
    version: GetDeleteIndexFieldVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteIndexFieldHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteIndexFieldRequest:
    headers: GetDeleteIndexFieldHeaders = field()
    query_params: GetDeleteIndexFieldQueryParams = field()
    

@dataclass
class GetDeleteIndexFieldResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
