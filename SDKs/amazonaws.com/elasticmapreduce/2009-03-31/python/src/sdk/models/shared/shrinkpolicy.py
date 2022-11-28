from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShrinkPolicy:
    r"""ShrinkPolicy
    Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
    """
    
    decommission_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DecommissionTimeout') }})
    instance_resize_policy: Optional[InstanceResizePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceResizePolicy') }})
    
