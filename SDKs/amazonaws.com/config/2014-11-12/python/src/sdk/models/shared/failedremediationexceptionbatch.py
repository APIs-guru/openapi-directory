from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailedRemediationExceptionBatch:
    r"""FailedRemediationExceptionBatch
    List of each of the failed remediation exceptions with specific reasons.
    """
    
    failed_items: Optional[List[RemediationException]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedItems') }})
    failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureMessage') }})
    
