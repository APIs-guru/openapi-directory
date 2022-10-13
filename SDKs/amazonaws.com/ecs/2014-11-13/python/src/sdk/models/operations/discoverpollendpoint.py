from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DiscoverPollEndpointXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_SERVICE_V20141113_DISCOVER_POLL_ENDPOINT = "AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint"


@dataclass
class DiscoverPollEndpointHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DiscoverPollEndpointXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DiscoverPollEndpointRequest:
    headers: DiscoverPollEndpointHeaders = field(default=None)
    request: shared.DiscoverPollEndpointRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoverPollEndpointResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    discover_poll_endpoint_response: Optional[shared.DiscoverPollEndpointResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
