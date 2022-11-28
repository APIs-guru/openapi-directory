from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PossibleRemediationActions:
    r"""PossibleRemediationActions
    A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions.
    """
    
    actions: Optional[List[PossibleRemediationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
