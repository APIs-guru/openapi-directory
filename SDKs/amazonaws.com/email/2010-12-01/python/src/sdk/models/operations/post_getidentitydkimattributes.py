from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class PostGetIdentityDkimAttributesActionEnum(str, Enum):
    GET_IDENTITY_DKIM_ATTRIBUTES = "GetIdentityDkimAttributes"

class PostGetIdentityDkimAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class PostGetIdentityDkimAttributesQueryParams:
    action: PostGetIdentityDkimAttributesActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostGetIdentityDkimAttributesVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostGetIdentityDkimAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostGetIdentityDkimAttributesRequest:
    headers: PostGetIdentityDkimAttributesHeaders = field()
    query_params: PostGetIdentityDkimAttributesQueryParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostGetIdentityDkimAttributesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
