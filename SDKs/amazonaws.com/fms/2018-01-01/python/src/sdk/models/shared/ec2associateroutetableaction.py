from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actiontarget
from . import actiontarget
from . import actiontarget


@dataclass_json
@dataclass
class Ec2AssociateRouteTableAction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    gateway_id: Optional[actiontarget.ActionTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatewayId' }})
    route_table_id: actiontarget.ActionTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    subnet_id: Optional[actiontarget.ActionTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
