from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteWorkGroupInput:
    work_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    recursive_delete_option: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecursiveDeleteOption') }})
    
