from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchStatementError:
    r"""BatchStatementError
     An error associated with a statement in a PartiQL batch that was run. 
    """
    
    code: Optional[BatchStatementErrorCodeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
