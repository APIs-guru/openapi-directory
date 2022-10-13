from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateTestGridURLXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_CREATE_TEST_GRID_URL = "DeviceFarm_20150623.CreateTestGridUrl"


@dataclass
class CreateTestGridURLHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateTestGridURLXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateTestGridURLRequest:
    headers: CreateTestGridURLHeaders = field(default=None)
    request: shared.CreateTestGridURLRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTestGridURLResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_test_grid_url_result: Optional[shared.CreateTestGridURLResult] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
