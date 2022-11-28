from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL = "OvertureService.CreateDirectConnectGatewayAssociationProposal"


@dataclass
class CreateDirectConnectGatewayAssociationProposalHeaders:
    x_amz_target: CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDirectConnectGatewayAssociationProposalRequest:
    headers: CreateDirectConnectGatewayAssociationProposalHeaders = field()
    request: shared.CreateDirectConnectGatewayAssociationProposalRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDirectConnectGatewayAssociationProposalResponse:
    content_type: str = field()
    status_code: int = field()
    create_direct_connect_gateway_association_proposal_result: Optional[shared.CreateDirectConnectGatewayAssociationProposalResult] = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    
