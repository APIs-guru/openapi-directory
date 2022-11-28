from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeUserPoolResponse:
    r"""DescribeUserPoolResponse
    Represents the response to describe the user pool.
    """
    
    user_pool: Optional[UserPoolType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPool') }})
    
