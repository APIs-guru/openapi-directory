from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateAccountPasswordPolicyActionEnum(str, Enum):
    UPDATE_ACCOUNT_PASSWORD_POLICY = "UpdateAccountPasswordPolicy"

class GetUpdateAccountPasswordPolicyVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetUpdateAccountPasswordPolicyQueryParams:
    action: GetUpdateAccountPasswordPolicyActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetUpdateAccountPasswordPolicyVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    allow_users_to_change_password: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AllowUsersToChangePassword', 'style': 'form', 'explode': True }})
    hard_expiry: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HardExpiry', 'style': 'form', 'explode': True }})
    max_password_age: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxPasswordAge', 'style': 'form', 'explode': True }})
    minimum_password_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MinimumPasswordLength', 'style': 'form', 'explode': True }})
    password_reuse_prevention: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PasswordReusePrevention', 'style': 'form', 'explode': True }})
    require_lowercase_characters: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RequireLowercaseCharacters', 'style': 'form', 'explode': True }})
    require_numbers: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RequireNumbers', 'style': 'form', 'explode': True }})
    require_symbols: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RequireSymbols', 'style': 'form', 'explode': True }})
    require_uppercase_characters: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'RequireUppercaseCharacters', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateAccountPasswordPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUpdateAccountPasswordPolicyRequest:
    headers: GetUpdateAccountPasswordPolicyHeaders = field()
    query_params: GetUpdateAccountPasswordPolicyQueryParams = field()
    

@dataclass
class GetUpdateAccountPasswordPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
