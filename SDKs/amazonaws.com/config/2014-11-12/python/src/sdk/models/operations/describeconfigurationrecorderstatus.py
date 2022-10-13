from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeConfigurationRecorderStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_CONFIGURATION_RECORDER_STATUS = "StarlingDoveService.DescribeConfigurationRecorderStatus"


@dataclass
class DescribeConfigurationRecorderStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeConfigurationRecorderStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeConfigurationRecorderStatusRequest:
    headers: DescribeConfigurationRecorderStatusHeaders = field(default=None)
    request: shared.DescribeConfigurationRecorderStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeConfigurationRecorderStatusResponse:
    content_type: str = field(default=None)
    describe_configuration_recorder_status_response: Optional[shared.DescribeConfigurationRecorderStatusResponse] = field(default=None)
    no_such_configuration_recorder_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
