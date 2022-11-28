from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PossibleRemediationAction:
    r"""PossibleRemediationAction
    A list of remediation actions.
    """
    
    ordered_remediation_actions: List[RemediationActionWithOrder] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderedRemediationActions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_default_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDefaultAction') }})
    
