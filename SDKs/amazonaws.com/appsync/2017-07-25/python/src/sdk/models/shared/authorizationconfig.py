from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthorizationConfig:
    r"""AuthorizationConfig
    The authorization config in case the HTTP endpoint requires authorization.
    """
    
    authorization_type: AuthorizationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationType') }})
    aws_iam_config: Optional[AwsIamConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsIamConfig') }})
    
