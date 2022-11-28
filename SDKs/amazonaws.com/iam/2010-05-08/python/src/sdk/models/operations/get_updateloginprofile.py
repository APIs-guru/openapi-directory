from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateLoginProfileActionEnum(str, Enum):
    UPDATE_LOGIN_PROFILE = "UpdateLoginProfile"

class GetUpdateLoginProfileVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateLoginProfileQueryParams:
    action: GetUpdateLoginProfileActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    user_name: str = field(metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetUpdateLoginProfileVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    password: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Password', 'style': 'form', 'explode': True }})
    password_reset_required: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'PasswordResetRequired', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateLoginProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateLoginProfileRequest:
    headers: GetUpdateLoginProfileHeaders = field()
    query_params: GetUpdateLoginProfileQueryParams = field()
    

@dataclass
class GetUpdateLoginProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
