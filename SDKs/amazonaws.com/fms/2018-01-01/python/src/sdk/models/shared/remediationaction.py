from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ec2associateroutetableaction
from . import ec2copyroutetableaction
from . import ec2createrouteaction
from . import ec2createroutetableaction
from . import ec2deleterouteaction
from . import ec2replacerouteaction
from . import ec2replaceroutetableassociationaction


@dataclass_json
@dataclass
class RemediationAction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    ec2_associate_route_table_action: Optional[ec2associateroutetableaction.Ec2AssociateRouteTableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2AssociateRouteTableAction' }})
    ec2_copy_route_table_action: Optional[ec2copyroutetableaction.Ec2CopyRouteTableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2CopyRouteTableAction' }})
    ec2_create_route_action: Optional[ec2createrouteaction.Ec2CreateRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2CreateRouteAction' }})
    ec2_create_route_table_action: Optional[ec2createroutetableaction.Ec2CreateRouteTableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2CreateRouteTableAction' }})
    ec2_delete_route_action: Optional[ec2deleterouteaction.Ec2DeleteRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2DeleteRouteAction' }})
    ec2_replace_route_action: Optional[ec2replacerouteaction.Ec2ReplaceRouteAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2ReplaceRouteAction' }})
    ec2_replace_route_table_association_action: Optional[ec2replaceroutetableassociationaction.Ec2ReplaceRouteTableAssociationAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2ReplaceRouteTableAssociationAction' }})
    
