from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkFirewallUnexpectedGatewayRoutesViolation:
    r"""NetworkFirewallUnexpectedGatewayRoutesViolation
    Violation detail for an unexpected gateway route that’s present in a route table.
    """
    
    gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayId') }})
    route_table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    violating_routes: Optional[List[Route]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolatingRoutes') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
