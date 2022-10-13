from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewayassociationproposal


@dataclass_json
@dataclass
class DeleteDirectConnectGatewayAssociationProposalResult:
    direct_connect_gateway_association_proposal: Optional[directconnectgatewayassociationproposal.DirectConnectGatewayAssociationProposal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayAssociationProposal' }})
    
