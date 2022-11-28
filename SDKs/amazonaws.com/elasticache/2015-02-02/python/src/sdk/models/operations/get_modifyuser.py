from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetModifyUserActionEnum(str, Enum):
    MODIFY_USER = "ModifyUser"

class GetModifyUserVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclass
class GetModifyUserQueryParams:
    action: GetModifyUserActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    user_id: str = field(metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    version: GetModifyUserVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    access_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AccessString', 'style': 'form', 'explode': True }})
    append_access_string: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AppendAccessString', 'style': 'form', 'explode': True }})
    no_password_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'NoPasswordRequired', 'style': 'form', 'explode': True }})
    passwords: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Passwords', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyUserHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyUserRequest:
    headers: GetModifyUserHeaders = field()
    query_params: GetModifyUserQueryParams = field()
    

@dataclass
class GetModifyUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
