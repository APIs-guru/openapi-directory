from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserPoolConfig:
    r"""UserPoolConfig
    Describes an Amazon Cognito user pool configuration.
    """
    
    aws_region: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsRegion') }})
    default_action: DefaultActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAction') }})
    user_pool_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userPoolId') }})
    app_id_client_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIdClientRegex') }})
    
