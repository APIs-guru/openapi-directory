from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteVerifiedEmailAddressActionEnum(str, Enum):
    DELETE_VERIFIED_EMAIL_ADDRESS = "DeleteVerifiedEmailAddress"

class GetDeleteVerifiedEmailAddressVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetDeleteVerifiedEmailAddressQueryParams:
    action: GetDeleteVerifiedEmailAddressActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    email_address: str = field(metadata={'query_param': { 'field_name': 'EmailAddress', 'style': 'form', 'explode': True }})
    version: GetDeleteVerifiedEmailAddressVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteVerifiedEmailAddressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteVerifiedEmailAddressRequest:
    headers: GetDeleteVerifiedEmailAddressHeaders = field()
    query_params: GetDeleteVerifiedEmailAddressQueryParams = field()
    

@dataclass
class GetDeleteVerifiedEmailAddressResponse:
    content_type: str = field()
    status_code: int = field()
    
