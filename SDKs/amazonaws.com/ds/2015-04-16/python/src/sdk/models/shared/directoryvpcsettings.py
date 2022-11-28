from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DirectoryVpcSettings:
    r"""DirectoryVpcSettings
    Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
    """
    
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
