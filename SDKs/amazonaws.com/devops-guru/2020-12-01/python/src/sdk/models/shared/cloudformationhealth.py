from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudFormationHealth:
    r"""CloudFormationHealth
     Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack. 
    """
    
    insight: Optional[InsightHealth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Insight') }})
    stack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackName') }})
    
