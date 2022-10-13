from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vpcpeeringauthorization


@dataclass_json
@dataclass
class DescribeVpcPeeringAuthorizationsOutput:
    vpc_peering_authorizations: Optional[List[vpcpeeringauthorization.VpcPeeringAuthorization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcPeeringAuthorizations' }})
    
