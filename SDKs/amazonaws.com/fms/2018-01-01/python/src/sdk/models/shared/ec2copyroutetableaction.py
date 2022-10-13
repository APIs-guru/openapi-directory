from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actiontarget
from . import actiontarget


@dataclass_json
@dataclass
class Ec2CopyRouteTableAction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    route_table_id: actiontarget.ActionTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteTableId' }})
    vpc_id: actiontarget.ActionTarget = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
