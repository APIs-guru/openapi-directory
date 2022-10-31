from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateDirectConnectGatewayAssociationXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION = "OvertureService.UpdateDirectConnectGatewayAssociation"


@dataclass
class UpdateDirectConnectGatewayAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateDirectConnectGatewayAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDirectConnectGatewayAssociationRequest:
    headers: UpdateDirectConnectGatewayAssociationHeaders = field(default=None)
    request: shared.UpdateDirectConnectGatewayAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDirectConnectGatewayAssociationResponse:
    content_type: str = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_direct_connect_gateway_association_result: Optional[shared.UpdateDirectConnectGatewayAssociationResult] = field(default=None)
    
