from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2CreateRouteTableAction:
    r"""Ec2CreateRouteTableAction
    Information about the CreateRouteTable action in Amazon EC2.
    """
    
    vpc_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
