from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRemediationExceptionsResponse:
    failed_batches: Optional[List[FailedRemediationExceptionBatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedBatches') }})
    
