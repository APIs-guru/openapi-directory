from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetModifyUserActionEnum(str, Enum):
    MODIFY_USER = "ModifyUser"

class GetModifyUserVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetModifyUserQueryParams:
    access_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AccessString', 'style': 'form', 'explode': True }})
    action: GetModifyUserActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    append_access_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AppendAccessString', 'style': 'form', 'explode': True }})
    no_password_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'NoPasswordRequired', 'style': 'form', 'explode': True }})
    passwords: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Passwords', 'style': 'form', 'explode': True }})
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    version: GetModifyUserVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyUserHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyUserRequest:
    query_params: GetModifyUserQueryParams = field(default=None)
    headers: GetModifyUserHeaders = field(default=None)
    

@dataclass
class GetModifyUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
