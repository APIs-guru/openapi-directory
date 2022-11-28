from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthenticationConfiguration:
    r"""AuthenticationConfiguration
    Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
    """
    
    access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessRoleArn') }})
    connection_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionArn') }})
    
