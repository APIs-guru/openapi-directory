from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyClusterInput:
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    step_concurrency_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepConcurrencyLevel') }})
    
