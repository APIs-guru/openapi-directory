from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutEvaluationsResponse:
    r"""PutEvaluationsResponse
    <p/>
    """
    
    failed_evaluations: Optional[List[Evaluation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedEvaluations') }})
    
