from dataclasses import dataclass, field
from typing import Enum,Optional

class GetUpdateAccountSendingEnabledActionEnum(str, Enum):
    UPDATE_ACCOUNT_SENDING_ENABLED = "UpdateAccountSendingEnabled"

class GetUpdateAccountSendingEnabledVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclass
class GetUpdateAccountSendingEnabledQueryParams:
    action: GetUpdateAccountSendingEnabledActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Enabled', 'style': 'form', 'explode': True }})
    version: GetUpdateAccountSendingEnabledVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpdateAccountSendingEnabledHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetUpdateAccountSendingEnabledRequest:
    query_params: GetUpdateAccountSendingEnabledQueryParams = field(default=None)
    headers: GetUpdateAccountSendingEnabledHeaders = field(default=None)
    

@dataclass
class GetUpdateAccountSendingEnabledResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
