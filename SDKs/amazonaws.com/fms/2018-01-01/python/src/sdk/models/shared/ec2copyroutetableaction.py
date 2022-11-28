from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2CopyRouteTableAction:
    r"""Ec2CopyRouteTableAction
    An action that copies the EC2 route table for use in remediation.
    """
    
    route_table_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    vpc_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
