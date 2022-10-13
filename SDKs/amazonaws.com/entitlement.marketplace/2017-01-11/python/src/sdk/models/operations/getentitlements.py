from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetEntitlementsXAmzTargetEnum(str, Enum):
    AWSMP_ENTITLEMENT_SERVICE_GET_ENTITLEMENTS = "AWSMPEntitlementService.GetEntitlements"


@dataclass
class GetEntitlementsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetEntitlementsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetEntitlementsRequest:
    headers: GetEntitlementsHeaders = field(default=None)
    request: shared.GetEntitlementsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEntitlementsResponse:
    content_type: str = field(default=None)
    get_entitlements_result: Optional[shared.GetEntitlementsResult] = field(default=None)
    internal_service_error_exception: Optional[shared.InternalServiceErrorException] = field(default=None)
    invalid_parameter_exception: Optional[shared.InvalidParameterException] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[shared.ThrottlingException] = field(default=None)
    
