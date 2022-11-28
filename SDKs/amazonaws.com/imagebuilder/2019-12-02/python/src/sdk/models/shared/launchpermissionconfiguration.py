from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LaunchPermissionConfiguration:
    r"""LaunchPermissionConfiguration
    Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html\">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html\">Amazon EC2 ModifyImageAttribute</a>.
    """
    
    user_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userGroups') }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userIds') }})
    
