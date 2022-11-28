from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetectMitigationActionsTaskStatistics:
    r"""DetectMitigationActionsTaskStatistics
     The statistics of a mitigation action task. 
    """
    
    actions_executed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsExecuted') }})
    actions_failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsFailed') }})
    actions_skipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionsSkipped') }})
    
