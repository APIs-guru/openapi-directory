from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyIdentityIDFormatActionEnum(str, Enum):
    MODIFY_IDENTITY_ID_FORMAT = "ModifyIdentityIdFormat"

class GetModifyIdentityIDFormatVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyIdentityIDFormatQueryParams:
    action: GetModifyIdentityIDFormatActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    principal_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'PrincipalArn', 'style': 'form', 'explode': True }})
    resource: str = field(default=None, metadata={'query_param': { 'field_name': 'Resource', 'style': 'form', 'explode': True }})
    use_long_ids: bool = field(default=None, metadata={'query_param': { 'field_name': 'UseLongIds', 'style': 'form', 'explode': True }})
    version: GetModifyIdentityIDFormatVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyIdentityIDFormatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyIdentityIDFormatRequest:
    query_params: GetModifyIdentityIDFormatQueryParams = field(default=None)
    headers: GetModifyIdentityIDFormatHeaders = field(default=None)
    

@dataclass
class GetModifyIdentityIDFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
