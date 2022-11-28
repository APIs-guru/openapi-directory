from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecuteCommandRequest:
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    interactive: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactive') }})
    task: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    
