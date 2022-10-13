from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ClaimDevicesByClaimCodePathParams:
    claim_code: str = field(default=None, metadata={'path_param': { 'field_name': 'claimCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClaimDevicesByClaimCodeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ClaimDevicesByClaimCodeRequest:
    path_params: ClaimDevicesByClaimCodePathParams = field(default=None)
    headers: ClaimDevicesByClaimCodeHeaders = field(default=None)
    

@dataclass
class ClaimDevicesByClaimCodeResponse:
    claim_devices_by_claim_code_response: Optional[shared.ClaimDevicesByClaimCodeResponse] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
