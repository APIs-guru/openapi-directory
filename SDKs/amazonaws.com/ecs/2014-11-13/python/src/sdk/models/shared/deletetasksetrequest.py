from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteTaskSetRequest:
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    task_set: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSet') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    
