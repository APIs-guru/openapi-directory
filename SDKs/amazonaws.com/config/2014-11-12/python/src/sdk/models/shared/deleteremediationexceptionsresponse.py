from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import faileddeleteremediationexceptionsbatch


@dataclass_json
@dataclass
class DeleteRemediationExceptionsResponse:
    failed_batches: Optional[List[faileddeleteremediationexceptionsbatch.FailedDeleteRemediationExceptionsBatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedBatches' }})
    
