from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetGetIdentityDkimAttributesActionEnum(str, Enum):
    GET_IDENTITY_DKIM_ATTRIBUTES = "GetIdentityDkimAttributes"

class GetGetIdentityDkimAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetGetIdentityDkimAttributesQueryParams:
    action: GetGetIdentityDkimAttributesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    identities: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'Identities', 'style': 'form', 'explode': True }})
    version: GetGetIdentityDkimAttributesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetIdentityDkimAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGetIdentityDkimAttributesRequest:
    query_params: GetGetIdentityDkimAttributesQueryParams = field(default=None)
    headers: GetGetIdentityDkimAttributesHeaders = field(default=None)
    

@dataclass
class GetGetIdentityDkimAttributesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
