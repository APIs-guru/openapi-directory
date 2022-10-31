from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeCustomRoutingAcceleratorXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ACCELERATOR = "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator"


@dataclass
class DescribeCustomRoutingAcceleratorHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeCustomRoutingAcceleratorXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeCustomRoutingAcceleratorRequest:
    headers: DescribeCustomRoutingAcceleratorHeaders = field(default=None)
    request: shared.DescribeCustomRoutingAcceleratorRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeCustomRoutingAcceleratorResponse:
    accelerator_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    describe_custom_routing_accelerator_response: Optional[shared.DescribeCustomRoutingAcceleratorResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
