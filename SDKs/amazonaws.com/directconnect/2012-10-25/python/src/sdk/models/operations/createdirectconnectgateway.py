from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDirectConnectGatewayXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY = "OvertureService.CreateDirectConnectGateway"


@dataclass
class CreateDirectConnectGatewayHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateDirectConnectGatewayXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateDirectConnectGatewayRequest:
    headers: CreateDirectConnectGatewayHeaders = field(default=None)
    request: shared.CreateDirectConnectGatewayRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDirectConnectGatewayResponse:
    content_type: str = field(default=None)
    create_direct_connect_gateway_result: Optional[shared.CreateDirectConnectGatewayResult] = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
