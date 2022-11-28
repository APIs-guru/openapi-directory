from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeCustomRoutingEndpointGroupXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ENDPOINT_GROUP = "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup"


@dataclass
class DescribeCustomRoutingEndpointGroupHeaders:
    x_amz_target: DescribeCustomRoutingEndpointGroupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeCustomRoutingEndpointGroupRequest:
    headers: DescribeCustomRoutingEndpointGroupHeaders = field()
    request: shared.DescribeCustomRoutingEndpointGroupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeCustomRoutingEndpointGroupResponse:
    content_type: str = field()
    status_code: int = field()
    describe_custom_routing_endpoint_group_response: Optional[shared.DescribeCustomRoutingEndpointGroupResponse] = field(default=None)
    endpoint_group_not_found_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    
