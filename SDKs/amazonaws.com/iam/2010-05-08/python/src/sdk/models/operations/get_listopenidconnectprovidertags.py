from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetListOpenIDConnectProviderTagsActionEnum(str, Enum):
    LIST_OPEN_ID_CONNECT_PROVIDER_TAGS = "ListOpenIDConnectProviderTags"

class GetListOpenIDConnectProviderTagsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetListOpenIDConnectProviderTagsQueryParams:
    action: GetListOpenIDConnectProviderTagsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    open_id_connect_provider_arn: str = field(metadata={'query_param': { 'field_name': 'OpenIDConnectProviderArn', 'style': 'form', 'explode': True }})
    version: GetListOpenIDConnectProviderTagsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListOpenIDConnectProviderTagsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListOpenIDConnectProviderTagsRequest:
    headers: GetListOpenIDConnectProviderTagsHeaders = field()
    query_params: GetListOpenIDConnectProviderTagsQueryParams = field()
    

@dataclass
class GetListOpenIDConnectProviderTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
