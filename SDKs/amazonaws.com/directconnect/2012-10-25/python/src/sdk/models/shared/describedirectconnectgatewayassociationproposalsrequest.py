from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeDirectConnectGatewayAssociationProposalsRequest:
    associated_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedGatewayId' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    
