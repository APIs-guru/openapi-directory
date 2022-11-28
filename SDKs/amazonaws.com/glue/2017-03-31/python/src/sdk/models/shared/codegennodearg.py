from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CodeGenNodeArg:
    r"""CodeGenNodeArg
    An argument or property of a node.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    param: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Param') }})
    
