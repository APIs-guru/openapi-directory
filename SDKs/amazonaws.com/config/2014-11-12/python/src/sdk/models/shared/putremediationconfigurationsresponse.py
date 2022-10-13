from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedremediationbatch


@dataclass_json
@dataclass
class PutRemediationConfigurationsResponse:
    failed_batches: Optional[List[failedremediationbatch.FailedRemediationBatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedBatches' }})
    
