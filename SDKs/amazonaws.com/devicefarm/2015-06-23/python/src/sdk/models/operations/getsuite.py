from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetSuiteXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_GET_SUITE = "DeviceFarm_20150623.GetSuite"


@dataclass
class GetSuiteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetSuiteXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetSuiteRequest:
    headers: GetSuiteHeaders = field(default=None)
    request: shared.GetSuiteRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSuiteResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_suite_result: Optional[shared.GetSuiteResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
