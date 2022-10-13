from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL = "OvertureService.DeleteDirectConnectGatewayAssociationProposal"


@dataclass
class DeleteDirectConnectGatewayAssociationProposalHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteDirectConnectGatewayAssociationProposalRequest:
    headers: DeleteDirectConnectGatewayAssociationProposalHeaders = field(default=None)
    request: shared.DeleteDirectConnectGatewayAssociationProposalRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteDirectConnectGatewayAssociationProposalResponse:
    content_type: str = field(default=None)
    delete_direct_connect_gateway_association_proposal_result: Optional[shared.DeleteDirectConnectGatewayAssociationProposalResult] = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
