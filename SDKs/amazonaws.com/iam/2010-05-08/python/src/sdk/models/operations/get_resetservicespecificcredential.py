from dataclasses import dataclass, field
from typing import Enum,Optional

class GetResetServiceSpecificCredentialActionEnum(str, Enum):
    RESET_SERVICE_SPECIFIC_CREDENTIAL = "ResetServiceSpecificCredential"

class GetResetServiceSpecificCredentialVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclass
class GetResetServiceSpecificCredentialQueryParams:
    action: GetResetServiceSpecificCredentialActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    service_specific_credential_id: str = field(default=None, metadata={'query_param': { 'field_name': 'ServiceSpecificCredentialId', 'style': 'form', 'explode': True }})
    user_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UserName', 'style': 'form', 'explode': True }})
    version: GetResetServiceSpecificCredentialVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetResetServiceSpecificCredentialHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetResetServiceSpecificCredentialRequest:
    query_params: GetResetServiceSpecificCredentialQueryParams = field(default=None)
    headers: GetResetServiceSpecificCredentialHeaders = field(default=None)
    

@dataclass
class GetResetServiceSpecificCredentialResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
