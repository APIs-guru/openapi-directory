from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemediationAction:
    r"""RemediationAction
    Information about an individual action you can take to remediate a violation.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    ec2_associate_route_table_action: Optional[Ec2AssociateRouteTableAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2AssociateRouteTableAction') }})
    ec2_copy_route_table_action: Optional[Ec2CopyRouteTableAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2CopyRouteTableAction') }})
    ec2_create_route_action: Optional[Ec2CreateRouteAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2CreateRouteAction') }})
    ec2_create_route_table_action: Optional[Ec2CreateRouteTableAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2CreateRouteTableAction') }})
    ec2_delete_route_action: Optional[Ec2DeleteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2DeleteRouteAction') }})
    ec2_replace_route_action: Optional[Ec2ReplaceRouteAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2ReplaceRouteAction') }})
    ec2_replace_route_table_association_action: Optional[Ec2ReplaceRouteTableAssociationAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2ReplaceRouteTableAssociationAction') }})
    
