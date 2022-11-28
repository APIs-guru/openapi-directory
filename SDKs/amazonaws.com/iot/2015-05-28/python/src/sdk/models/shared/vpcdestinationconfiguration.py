from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcDestinationConfiguration:
    r"""VpcDestinationConfiguration
    The configuration information for a virtual private cloud (VPC) destination.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcId') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
