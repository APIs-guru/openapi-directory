from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directconnectgatewayassociationproposal


@dataclass_json
@dataclass
class DescribeDirectConnectGatewayAssociationProposalsResult:
    direct_connect_gateway_association_proposals: Optional[List[directconnectgatewayassociationproposal.DirectConnectGatewayAssociationProposal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayAssociationProposals' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
