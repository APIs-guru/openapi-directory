from dataclasses import dataclass, field
from typing import Enum,Optional

class GetEnableMfaDeviceActionEnum(str, Enum):
    ENABLE_MFA_DEVICE = "EnableMFADevice"

class GetEnableMfaDeviceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetEnableMfaDeviceQueryParams:
    action: GetEnableMfaDeviceActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    authentication_code1: str = field(default=None, metadata={'query_param': { 'field_name': 'AuthenticationCode1', 'style': 'form', 'explode': True }})
    authentication_code2: str = field(default=None, metadata={'query_param': { 'field_name': 'AuthenticationCode2', 'style': 'form', 'explode': True }})
    serial_number: str = field(default=None, metadata={'query_param': { 'field_name': 'SerialNumber', 'style': 'form', 'explode': True }})
    user_name: str = field(default=None, metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetEnableMfaDeviceVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEnableMfaDeviceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnableMfaDeviceRequest:
    query_params: GetEnableMfaDeviceQueryParams = field(default=None)
    headers: GetEnableMfaDeviceHeaders = field(default=None)
    

@dataclass
class GetEnableMfaDeviceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
