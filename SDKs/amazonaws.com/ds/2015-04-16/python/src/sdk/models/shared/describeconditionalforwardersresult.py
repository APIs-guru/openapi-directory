from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConditionalForwardersResult:
    r"""DescribeConditionalForwardersResult
    The result of a DescribeConditionalForwarder request.
    """
    
    conditional_forwarders: Optional[List[ConditionalForwarder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalForwarders') }})
    
