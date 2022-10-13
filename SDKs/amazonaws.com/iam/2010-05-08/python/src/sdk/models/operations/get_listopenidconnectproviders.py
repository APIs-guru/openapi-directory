from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListOpenIDConnectProvidersActionEnum(str, Enum):
    LIST_OPEN_ID_CONNECT_PROVIDERS = "ListOpenIDConnectProviders"

class GetListOpenIDConnectProvidersVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetListOpenIDConnectProvidersQueryParams:
    action: GetListOpenIDConnectProvidersActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetListOpenIDConnectProvidersVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListOpenIDConnectProvidersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetListOpenIDConnectProvidersRequest:
    query_params: GetListOpenIDConnectProvidersQueryParams = field(default=None)
    headers: GetListOpenIDConnectProvidersHeaders = field(default=None)
    

@dataclass
class GetListOpenIDConnectProvidersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
