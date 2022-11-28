from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InvalidInputExceptionInfo:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    validation_errors: List[InvalidInputProperty] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    exception_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionClassName') }})
    exception_stack: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionStack') }})
    
