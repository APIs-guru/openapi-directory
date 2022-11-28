from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemediationActionWithOrder:
    r"""RemediationActionWithOrder
    An ordered list of actions you can take to remediate a violation.
    """
    
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Order') }})
    remediation_action: Optional[RemediationAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationAction') }})
    
