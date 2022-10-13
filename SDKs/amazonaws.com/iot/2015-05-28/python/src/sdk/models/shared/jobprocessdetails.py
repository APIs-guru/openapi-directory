from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobProcessDetails:
    number_of_canceled_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfCanceledThings' }})
    number_of_failed_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfFailedThings' }})
    number_of_in_progress_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfInProgressThings' }})
    number_of_queued_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfQueuedThings' }})
    number_of_rejected_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRejectedThings' }})
    number_of_removed_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRemovedThings' }})
    number_of_succeeded_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfSucceededThings' }})
    number_of_timed_out_things: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfTimedOutThings' }})
    processing_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processingTargets' }})
    
