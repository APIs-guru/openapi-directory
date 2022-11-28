from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2ReplaceRouteTableAssociationAction:
    r"""Ec2ReplaceRouteTableAssociationAction
    Information about the ReplaceRouteTableAssociation action in Amazon EC2.
    """
    
    association_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    route_table_id: ActionTarget = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteTableId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
