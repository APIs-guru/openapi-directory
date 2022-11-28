from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDirectConnectGatewayAssociationProposalResult:
    direct_connect_gateway_association_proposal: Optional[DirectConnectGatewayAssociationProposal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayAssociationProposal') }})
    
