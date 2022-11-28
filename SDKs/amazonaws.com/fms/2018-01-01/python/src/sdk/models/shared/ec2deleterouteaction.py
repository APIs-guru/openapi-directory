from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2DeleteRouteAction:
    r"""Ec2DeleteRouteAction
    Information about the DeleteRoute action in Amazon EC2.
    """
    
    route_table_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    destination_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationCidrBlock') }})
    destination_ipv6_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationIpv6CidrBlock') }})
    destination_prefix_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPrefixListId') }})
    
