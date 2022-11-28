from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfig:
    r"""VpcConfig
     Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html\">Amazon VPC</a>. 
    """
    
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    
