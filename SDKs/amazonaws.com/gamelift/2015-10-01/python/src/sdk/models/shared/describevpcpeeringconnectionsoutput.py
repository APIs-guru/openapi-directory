from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeVpcPeeringConnectionsOutput:
    r"""DescribeVpcPeeringConnectionsOutput
    Represents the returned data in response to a request operation.
    """
    
    vpc_peering_connections: Optional[List[VpcPeeringConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcPeeringConnections') }})
    
