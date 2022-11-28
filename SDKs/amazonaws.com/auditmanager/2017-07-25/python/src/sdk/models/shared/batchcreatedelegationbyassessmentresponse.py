from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchCreateDelegationByAssessmentResponse:
    delegations: Optional[List[Delegation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    errors: Optional[List[BatchCreateDelegationByAssessmentError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
