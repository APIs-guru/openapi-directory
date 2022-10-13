from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import actiontypeid


@dataclass_json
@dataclass
class PollForThirdPartyJobsInput:
    action_type_id: actiontypeid.ActionTypeID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionTypeId' }})
    max_batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxBatchSize' }})
    
