from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailedRemediationBatch:
    r"""FailedRemediationBatch
    List of each of the failed remediations with specific reasons.
    """
    
    failed_items: Optional[List[RemediationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedItems') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    
