from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedremediationexceptionbatch


@dataclass_json
@dataclass
class PutRemediationExceptionsResponse:
    failed_batches: Optional[List[failedremediationexceptionbatch.FailedRemediationExceptionBatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedBatches' }})
    
