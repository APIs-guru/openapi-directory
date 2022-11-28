from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotFoundKnownExceptionInfo:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    exception_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionClassName') }})
    exception_stack: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceptionStack') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    root_cause_exception_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootCauseExceptionClassName') }})
    root_cause_exception_stack: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootCauseExceptionStack') }})
    
