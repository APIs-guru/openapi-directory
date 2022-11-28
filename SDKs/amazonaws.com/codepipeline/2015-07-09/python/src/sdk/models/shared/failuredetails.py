from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FailureDetails:
    r"""FailureDetails
    Represents information about failure details.
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: FailureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    external_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalExecutionId') }})
    
