from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeIdentityUsageResponse:
    r"""DescribeIdentityUsageResponse
    The response to a successful DescribeIdentityUsage request.
    """
    
    identity_usage: Optional[IdentityUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityUsage') }})
    
