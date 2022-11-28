from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateComputerResult:
    r"""CreateComputerResult
    Contains the results for the <a>CreateComputer</a> operation.
    """
    
    computer: Optional[Computer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Computer') }})
    
