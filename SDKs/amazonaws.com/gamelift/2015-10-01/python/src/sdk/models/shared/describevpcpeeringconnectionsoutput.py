from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vpcpeeringconnection


@dataclass_json
@dataclass
class DescribeVpcPeeringConnectionsOutput:
    vpc_peering_connections: Optional[List[vpcpeeringconnection.VpcPeeringConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcPeeringConnections' }})
    
