from dataclasses import dataclass, field
from typing import Enum,Optional

class GetPutUserPermissionsBoundaryActionEnum(str, Enum):
    PUT_USER_PERMISSIONS_BOUNDARY = "PutUserPermissionsBoundary"

class GetPutUserPermissionsBoundaryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetPutUserPermissionsBoundaryQueryParams:
    action: GetPutUserPermissionsBoundaryActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    permissions_boundary: str = field(default=None, metadata={'query_param': { 'field_name': 'PermissionsBoundary', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetPutUserPermissionsBoundaryVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutUserPermissionsBoundaryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPutUserPermissionsBoundaryRequest:
    query_params: GetPutUserPermissionsBoundaryQueryParams = field(default=None)
    headers: GetPutUserPermissionsBoundaryHeaders = field(default=None)
    

@dataclass
class GetPutUserPermissionsBoundaryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
