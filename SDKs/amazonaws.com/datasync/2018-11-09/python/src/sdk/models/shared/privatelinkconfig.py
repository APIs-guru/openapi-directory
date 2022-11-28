from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrivateLinkConfig:
    r"""PrivateLinkConfig
    The VPC endpoint, subnet, and security group that an agent uses to access IP addresses in a VPC (Virtual Private Cloud).
    """
    
    private_link_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateLinkEndpoint') }})
    security_group_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupArns') }})
    subnet_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetArns') }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcEndpointId') }})
    
