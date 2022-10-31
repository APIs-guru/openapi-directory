from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSetIdentityDkimEnabledActionEnum(str, Enum):
    SET_IDENTITY_DKIM_ENABLED = "SetIdentityDkimEnabled"

class GetSetIdentityDkimEnabledVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetSetIdentityDkimEnabledQueryParams:
    action: GetSetIdentityDkimEnabledActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dkim_enabled: bool = field(default=None, metadata={'query_param': { 'field_name': 'DkimEnabled', 'style': 'form', 'explode': True }})
    identity: str = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    version: GetSetIdentityDkimEnabledVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetIdentityDkimEnabledHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetIdentityDkimEnabledRequest:
    query_params: GetSetIdentityDkimEnabledQueryParams = field(default=None)
    headers: GetSetIdentityDkimEnabledHeaders = field(default=None)
    

@dataclass
class GetSetIdentityDkimEnabledResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
