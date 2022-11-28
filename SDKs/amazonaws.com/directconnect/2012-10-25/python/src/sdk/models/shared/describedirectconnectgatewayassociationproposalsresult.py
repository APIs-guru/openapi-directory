from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDirectConnectGatewayAssociationProposalsResult:
    direct_connect_gateway_association_proposals: Optional[List[DirectConnectGatewayAssociationProposal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayAssociationProposals') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
