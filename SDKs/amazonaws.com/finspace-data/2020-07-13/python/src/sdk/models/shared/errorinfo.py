from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorInfo:
    r"""ErrorInfo
    Error message.
    """
    
    error_category: Optional[ErrorCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCategory') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    
