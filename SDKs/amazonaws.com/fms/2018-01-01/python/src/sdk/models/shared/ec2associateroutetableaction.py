from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2AssociateRouteTableAction:
    r"""Ec2AssociateRouteTableAction
    The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
    """
    
    route_table_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    gateway_id: Optional[ActionTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatewayId') }})
    subnet_id: Optional[ActionTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    
