from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vpcpeeringauthorization


@dataclass_json
@dataclass
class CreateVpcPeeringAuthorizationOutput:
    vpc_peering_authorization: Optional[vpcpeeringauthorization.VpcPeeringAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcPeeringAuthorization' }})
    
